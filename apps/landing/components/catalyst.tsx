import Image from "next/image";
import { motion } from "framer-motion";

const CatalystSection = () => {
  return (
    <div className="w-full h-96 grid place-items-center relative">
      <div className="lg:max-w-[1000px] w-full h-full grid place-items-center">
        <div className="absolute bottom-0 max-w-[1000px] w-full flex items-end justify-center h-96 select-none pointer-events-none z-30">
          <Image src="/assets/blooms/2.png" width={624} height={339} />
        </div>
        <motion.h1 className="lg:text-6xl text-3xl sm:text-4xl max-w-3xl text-center text-white font-semibold absolute">
          A catalyst to increase your productivity by ~5x.
        </motion.h1>

        <div className="w-3/4 lg:w-full lg:max-w-[1000px] h-20 bg-bg absolute -bottom-[86px] border-t border-t-purple-purple12" />
      </div>
    </div>
  );
};

export default CatalystSection;
