const Card = ({ keyb, description }: { keyb: string; description: string }) => {
  return (
    <div className="flex flex-col gap-4 w-64">
      <div className="w-full bg-dark-gray6 rounded-xl p-4 flex gap-4">
        <div className="w-28 h-28 bg-dark-gray4 rounded-xl flex items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 28C7.588 28 4 31.588 4 36C4 40.412 7.588 44 12 44C14.1136 43.9974 16.1405 43.159 17.6384 41.6678C19.1364 40.1766 19.9838 38.1536 19.996 36.04H20V32H28V36.078H28.008C28.0296 38.1845 28.8807 40.1975 30.3768 41.6805C31.873 43.1635 33.8934 43.9969 36 44C40.412 44 44 40.412 44 36C44 31.588 40.412 28 36 28H32V20H36C40.412 20 44 16.412 44 12C44 7.588 40.412 4 36 4C31.588 4 28 7.588 28 12V16H20V11.96H19.996C19.9838 9.84639 19.1364 7.82333 17.6384 6.33214C16.1405 4.84094 14.1136 4.00261 12 4C7.588 4 4 7.588 4 12C4 16.412 7.588 20 12 20H16V28H12ZM16 36C16 38.244 14.242 40 12 40C9.758 40 8 38.244 8 36C8 33.756 9.758 32 12 32H16V36ZM36 32C38.242 32 40 33.756 40 36C40 38.244 38.242 40 36 40C33.758 40 32 38.244 32 36V32H36ZM32 12C32 9.756 33.758 8 36 8C38.242 8 40 9.756 40 12C40 14.244 38.242 16 36 16H32V12ZM12 16C9.758 16 8 14.244 8 12C8 9.756 9.758 8 12 8C14.242 8 16 9.756 16 12V16H12ZM20 20H28V28H20V20Z"
              fill="#F8F8F8"
            />
          </svg>
        </div>
        <div className="w-28 h-28 bg-dark-gray4 rounded-xl flex items-center justify-center font-semibold text-4xl">
          {keyb}
        </div>
      </div>
      <div className="text-center text-md opacity-60">{description}</div>
    </div>
  );
};

export default Card;
