import Image from "next/image";
import Card from "./cards";

const MoreFeatures = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-28">
      <div className="max-w-[1000px] border-b-[#F7ECFC1A] border-b-2 border-t-[#F7ECFC1A] border-t-2 rounded-[125px] sm:rounded-[156px] md:rounded-[250px] w-full relative">
        <div className="absolute top-0 w-full flex justify-center select-none pointer-events-none">
          <Image src={`/assets/blooms/3.svg`} width={624} height={518} />
        </div>
        <div className="absolute bottom-0 w-full flex justify-center select-none pointer-events-none">
          <Image src={`/assets/blooms/4.svg`} width={624} height={518} />
        </div>
        <div className="py-24 flex flex-col items-center">
          <Card
            title="Collaboration. At its finest"
            description="Twidge is built for collaboration at its finest, send a link to your colleague and start working together. "
            image="/assets/illustrations/collab.svg"
          />
          <div className="w-1/2 mt-10 mb-10 border-t border-t-white"></div>
          <Card
            title="Keep everything in place with spaces."
            description="Spaces help you divide tasks based on what they are related to, say work, personal, archive etc."
            image="/assets/illustrations/spaces.svg"
          />
          <div className="w-1/2 mt-10 mb-10 border-t border-t-white"></div>
          <Card
            title="Instantly do anything with control center."
            description="Twidge has a global keybinding just like Spotlight. Instantly read, add, delete notes, todos and calendar elements at the speed of light!"
            image="/assets/illustrations/control-center.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;
