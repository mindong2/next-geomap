import Another from "./anotherPage";
export default function Home() {
  type Remote<T> = (x: T) => T;

  const remoteChange: Remote<string> = (name) => {
    return `${name}, hello world!`;
  };
  return (
    <>
      <h1 style={{ fontSize: "3rem" }}>{remoteChange("dongmin")}</h1>
      <Another />
    </>
  );
}
