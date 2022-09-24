import React, { useContext } from "react";
import {
  Maximize20Regular,
  LineHorizontal120Regular,
} from "@fluentui/react-icons";
import { appWindow } from "@tauri-apps/api/window";
import MenuBarContext from "./ctx";

const TrafficLight = ({
  className,
  children,
  onClick,
}: {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

const WindowsTrafficLights = () => {
  const ctx = useContext(MenuBarContext);
  return (
    <div className="h-full flex rounded-tr-md">
      <TrafficLight
        onClick={() => {
          appWindow.minimize();
        }}
        className="w-10 h-10 transition-all duration-150 hover:bg-gray-600 flex items-center justify-center"
      >
        <LineHorizontal120Regular color="white" />
      </TrafficLight>
      <TrafficLight
        onClick={() => {
          appWindow.toggleMaximize().then(() => {
            appWindow.isMaximized().then((vl) => {
              ctx.setMaximised(vl);
            });
          });
        }}
        className="w-10 h-10 transition-all duration-150 hover:bg-gray-600 flex items-center justify-center"
      >
        <Maximize20Regular color="white" />
      </TrafficLight>
      <TrafficLight
        onClick={() => {
          appWindow.close();
        }}
        className="w-10 h-10 transition-all duration-150 rounded-tr-md hover:bg-red-500 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="#ffffff"
          width="24px"
          height="24px"
        >
          <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z" />
        </svg>
      </TrafficLight>
    </div>
  );
};

export default WindowsTrafficLights;
