import React from "react";
import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandTwitter,
} from "@tabler/icons";

const Card = ({ link, icon }: { link: string; icon: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4 bg-dark-gray3 rounded-xl">
            <a target={"_blank"} href={link}>
                {icon}
            </a>
        </div>
    );
};
const LinkCards = () => {
    return (
        <div className="flex gap-4 items-center justify-center pt-4">
            <Card
                link="https://github.com/VarunPotti/twidge"
                icon={<IconBrandGithub width={64} height={64} />}
            />
            <Card
                link="https://twitter.com/PottiVarun"
                icon={<IconBrandTwitter width={64} height={64} />}
            />
            <Card
                link="https://discord.gg/JWrtFeUdVA"
                icon={<IconBrandDiscord width={64} height={64} />}
            />
        </div>
    );
};

export default LinkCards;
