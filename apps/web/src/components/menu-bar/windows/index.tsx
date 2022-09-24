import {
  ArrowHookDownLeft16Filled,
  ArrowHookUpRight16Filled,
} from "@fluentui/react-icons";
import { useDispatch, useSelector } from "@twidge/core/state";
import { popBackRoutes, popForwardRoutes } from "@twidge/core/state/router";
import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router";
import MenuBarContext from "./ctx";
import WindowsTrafficLights from "./traffic_light";

const MenuButton = ({
  children,
  disabled,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={() => {
        if (disabled) return;
        onClick();
      }}
      className={`${
        disabled ? "text-dark-gray11" : "text-dark-blue11 hover:bg-dark-blue4"
      }  transition-all duration-150 w-6 h-6 grid place-items-center rounded-xl`}
    >
      {children}
    </div>
  );
};

const WindowsMenuBar = () => {
  const ctx = useContext(MenuBarContext);
  const backRoutes = useSelector((state: any) => state.router.backRoutes);
  const forwardRoutes = useSelector((state: any) => state.router.forwardRoutes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      data-tauri-drag-region
      className={`absolute z-[9999999999999999] w-[calc(100%-4%)] top-0 right-0 h-10 flex items-center justify-between pl-2 border-b  border-b-dark-gray4 bg-dark-gray1 ${
        ctx.maximised ? "" : "rounded-tr-md"
      }`}
    >
      <div className="flex gap-3">
        <MenuButton
          disabled={backRoutes.length == 1}
          onClick={() => {
            navigate(backRoutes[backRoutes.length - 2]);
            dispatch(popBackRoutes());
          }}
        >
          <ArrowHookDownLeft16Filled />
        </MenuButton>
        <MenuButton
          disabled={forwardRoutes.length == 0}
          onClick={() => {
            navigate(forwardRoutes[forwardRoutes.length - 1]);
            dispatch(popForwardRoutes());
          }}
        >
          <ArrowHookUpRight16Filled />
        </MenuButton>
      </div>
      <WindowsTrafficLights />
    </div>
  );
};

export default WindowsMenuBar;
