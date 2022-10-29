import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-64 pt-5 border-t border-t-purple-purple4 bg-[#010415] flex items-center justify-around">
      <Image src="/assets/logo.svg" width={"74px"} height={"52px"} />
      <div className="flex gap-2">
        <Link target="_blank" href={`https://discord.gg/JWrtFeUdVA`} passHref>
          <a target="_blank">
            <Image
              className="cursor-pointer"
              src="/assets/links/discord.svg"
              width={"24px"}
              height={"24px"}
            />
          </a>
        </Link>
        <Link target="_blank" href={`https://twitter.com/twidgeapp`} passHref>
          <a target="_blank">
            <Image
              className="cursor-pointer"
              src="/assets/links/twitter.svg"
              width={"24px"}
              height={"24px"}
            />
          </a>
        </Link>
        <Link
          target="_blank"
          href={`https://github.com/twidgeapp/twidge`}
          passHref
        >
          <a target="_blank">
            <Image
              className="cursor-pointer"
              src="/assets/links/github.svg"
              width={"24px"}
              height={"24px"}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
