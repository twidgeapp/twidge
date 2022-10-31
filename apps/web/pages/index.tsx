import PrivateLayout from '../layouts/private';
import { trpc } from '../utils/trpc';

export default function IndexPage() {
    const { data } = trpc.user.get.useQuery();

    return <PrivateLayout fallback={<div>asd</div>}>asd</PrivateLayout>;
}
