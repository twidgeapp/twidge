import { trpc } from '../utils/trpc';

interface Props {
    children: React.ReactNode;
}

const SpaceLayout = (props: Props) => {
    const { data } = trpc.spaces.get.useQuery();
    return <div className="w-screen h-screen">{JSON.stringify(data)}</div>;
};

export default SpaceLayout;
