import { appWindow } from "@tauri-apps/api/window";
import Logo from "../../../assets/logo.svg";

const LinuxMenuBar = () => {
  return (
    <div className="h-[30px] rounded-tl-md rounded-tr-md">
      <div
        className="px-2 flex items-center justify-between h-full w-full"
        data-tauri-drag-region
      >
        <div className="flex items-center">
          <img src={Logo} width={"20px"} alt="" />
          <div className="flex gap-3"></div>
        </div>
        <div className="gap-2 flex justify-center items-center">
          <div
            className="flex items-center justify-center w-4 h-4 bg-yellow-500 transition-all duration-100 hover:bg-yellow-600 rounded-full"
            onClick={() => {
              appWindow.minimize();
            }}
          />
          <div
            className="flex items-center justify-center w-4 h-4 bg-green-500 transition-all duration-100 hover:bg-green-600 rounded-full"
            onClick={() => {
              appWindow.toggleMaximize();
            }}
          />
          <div
            className="flex items-center justify-center w-4 h-4 bg-red-500 transition-all duration-100 hover:bg-red-600 rounded-full"
            onClick={() => {
              appWindow.close();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LinuxMenuBar;
