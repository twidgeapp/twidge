import { styled } from "@twidge/config/stitches.config";
import usePlatform from "./hooks/usePlatform";
import rspc from "./query";
import { observer } from "mobx-react";
import Global from "@twidge/utils/state/global";
import { useContext } from "react";
import GlobalContext, { IGlobalContext } from "@twidge/utils/ctx";
import LoadingPage from "./pages/loading";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home";

const Root = styled("div", {
  width: "100%",
  height: "100%",
  borderRadius: "12px",
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoadingPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
    </>
  )
);

const App = observer(({ globalStore }: { globalStore: Global }) => {
  const { data } = rspc.useQuery(["version"], {
    onSuccess: (e) => {
      globalStore.setVersion(e);
    },
  });
  const platform = usePlatform();

  return (
    <Root>
      <RouterProvider router={router} />
    </Root>
  );
});

const RootApp = () => {
  const ctx = useContext<IGlobalContext>(GlobalContext);
  return <App globalStore={ctx.globalStore} />;
};

export default RootApp;
