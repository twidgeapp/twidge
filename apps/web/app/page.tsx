import { rsc } from "../server";

export default function Page() {
  const value = rsc.whoami.use();
  return (
    <div>
      <p>{JSON.stringify(value)}</p>
    </div>
  );
}
