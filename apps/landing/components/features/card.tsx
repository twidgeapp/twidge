import React from "react";

interface Props {
  text: string;
  title: string;
  illustration: React.ReactNode;
}

const Card = (props: Props) => {
  return (
    <div
      className={`card rounded-3xl p-4 backdrop-blur-[3px] lg:w-60 md:w-40 md:h-40 sm:w-36 sm:h-36 w-54 h-48`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center justify-start w-full">
          {props.illustration}{" "}
          <span className="text-lg font-extrabold">{props.title}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2 font-medium break-all">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
