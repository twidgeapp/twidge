import { useDispatch, useSelector } from "@twidge/core/state";
import Image from "../../assets/logo.svg";
import { Link, useNavigate } from "@twidge/core/router";
import Element from "./element";
import { Add20Filled, Document16Filled } from "@fluentui/react-icons";
import rspc from "@twidge/core/query";
import { setSpaces } from "@twidge/core/state/space";
import { useEffect } from "react";

const LineBreak = () => (
  <div className="border-b w-3/5 h-1 border-b-dark-gray4"></div>
);

const Sidebar = () => {
  const platform = useSelector((state: any) => state.global.platform);
  const { mutate } = rspc.useMutation("spaces.create");
  const { refetch, data } = rspc.useQuery(["spaces.get"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(setSpaces(data));
  }, [data]);

  return (
    <div className="no-scrollbar w-14 min-w-[3.5rem]">
      <div
        className="w-full h-full overflow-y-auto bg-dark-gray1 py-3 border-r border-r-dark-gray4 "
        style={{
          borderTopLeftRadius: platform === "win32" ? "12px" : "",
          borderBottomLeftRadius: platform === "win32" ? "12px" : "",
        }}
      >
        <div className="h-fit w-full flex items-center flex-col gap-2 pb-12">
          <Link to="/home">
            <img className="w-6 h-6 select-none" src={Image} />
          </Link>
          <Element
            color="#9E9E9E"
            onClick={() => {
              mutate(undefined, {
                onSuccess() {
                  refetch();
                },
              });
            }}
            icon={<Add20Filled />}
          />
          <LineBreak />
          {data?.map((space, idx) => (
            <Link to={`/spaces/${space.id}`} key={idx}>
              <Element
                color={space.color}
                icon={<Document16Filled />}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
