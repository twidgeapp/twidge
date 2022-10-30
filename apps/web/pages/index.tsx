import PrivateLayout from '../layouts/private';

export default function IndexPage() {
    return (
        <div className='w-screen h-screen text-white'>
            <PrivateLayout fallback={(<div>asd</div>)}>
                <div>asdasd</div>
            </PrivateLayout>
        </div>
    );
}
