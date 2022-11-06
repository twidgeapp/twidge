import { protectedProcedure, router } from '../server';
import b2 from '../backblaze';
import zod from 'zod';

const uploadSchema = zod.object({
    file: zod.object({
        name: zod.string(),
        size: zod.number(),
        type: zod.string(),
        data: zod.string(),
    }),
});

const storageRouter = router({
    upload: protectedProcedure
        .input(uploadSchema)
        .mutation(async ({ ctx, input }) => {
            const id = ctx.user?.id;
            // convert file to buffer
            // convert data url to buffer
            const buffer = Buffer.from(
                input.file.data.replace(/^data:.*;base64,/, ''),
                'base64'
            );

            const uploadUrl = await b2.getUploadUrl({
                bucketId: process.env.BACKBLAZE_BUCKET_ID!,
            });

            // generate random string
            const randomString = Math.random().toString(36).substring(2, 15);

            const fileName: string = randomString + input.file.name;
            await b2.uploadFile({
                fileName: fileName,
                data: buffer,
                uploadUrl: uploadUrl.data.uploadUrl,
                uploadAuthToken: uploadUrl.data.authorizationToken,
            });

            const storage = await ctx.prisma.files.create({
                data: {
                    name: fileName,
                    size: input.file.size,
                    type: input.file.type,
                    url:
                        'https://f004.backblazeb2.com/file/twidge-storage/' +
                        fileName,
                    user: {
                        connect: {
                            id,
                        },
                    },
                },
            });

            return storage;
        }),
});

export default storageRouter;
