import B2 from 'backblaze-b2';
const b2 = new B2({
    applicationKeyId: process.env.BACKBLAZE_APP_ID!,
    applicationKey: process.env.BACKBLAZE_APP_SECRET!,
});


async function connectBackblaze() {
    await b2.authorize();
    console.log('Connected to Backblaze');
}
connectBackblaze();
// Backblazes tokens are only valid for 24 hours
setInterval(async () => {
    connectBackblaze();
}, 1000 * 60 * 60 * 23);

export default b2;