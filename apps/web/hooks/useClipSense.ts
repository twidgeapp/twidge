import { useEffect } from 'react';
import { trpc } from '../utils/trpc';

interface IFileType {
    type: 'image' | 'video' | 'audio' | 'text' | 'media' | 'other' | 'link';
    data: any;
}

const useClipSense = () => {
    const { mutate } = trpc.storage.upload.useMutation();

    useEffect(() => {
        const onPaste = async (e: ClipboardEvent) => {
            const file: IFileType[] = [];

            if (!e.clipboardData) return;

            // check if the clipboard is a file
            if (e.clipboardData!.files.length > 0) {
                // do something with the file
                for (
                    let index = 0;
                    index < e.clipboardData.files.length;
                    index++
                ) {
                    const element = e.clipboardData.files[index];
                    const type_split = element.type.split('/');
                    const type = type_split[0];
                    const file_type =
                        type_split.length > 1 ? type_split[1] : 'other';

                    const data_url = await new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            resolve(e.target?.result);
                        };
                        reader.readAsDataURL(element);
                    });

                    const data = {
                        name: element.name,
                        size: element.size,
                        type: element.type,
                        data: data_url as any,
                    };

                    mutate({
                        file: data,
                    });
                    file.push({
                        type: (type !== '' ? type : 'other') as any,
                        data: {
                            name: element.name,
                            type: file_type,
                            size: element.size,
                            url: URL.createObjectURL(element),
                        },
                    });
                }
            } else {
                // get the text from the clipboard
                const text = e.clipboardData?.getData('text/plain');
                // check if text is a link using regex
                const isLink = text?.match(
                    /((http|https|ftp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)/
                );
                file.push({
                    type: isLink ? 'link' : 'text',
                    data: text!,
                });
            }

            console.log(file);
        };

        document.addEventListener('paste', onPaste);

        return () => {
            document.removeEventListener('paste', onPaste);
        };
    });
};

export default useClipSense;
