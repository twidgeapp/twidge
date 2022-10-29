import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-between px-14">
      <Image src="/assets/logo.svg" width={74} height={52} />
      <div />
    </div>
  );
};

export default Navbar;
