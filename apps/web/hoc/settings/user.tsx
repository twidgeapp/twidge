import User from '@twidge/utils/state/user';
import { observer } from 'mobx-react';
import SettingsSidebar from '../../components/settings/sidebar';

interface Props {
    user: User;
}

const UserPage = (props: Props) => {
    return (
        <div className="flex">
            <SettingsSidebar />
            <div>
                <h1>User Page</h1>
                <p>{props.user?.name}</p>
            </div>
        </div>
    );
};

export default observer(UserPage);
