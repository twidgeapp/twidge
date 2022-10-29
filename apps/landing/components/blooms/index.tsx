import Image from "next/image";

const Bloom = () => {
  return (
    <div className="absolute select-none pointer-events-none">
      <Image
        className="absolute !top-[-600px] !left-[-500px]"
        src="/assets/blooms/1.png"
        width={700}
        height={700}
      />
    </div>
  );
};

export default Bloom;
