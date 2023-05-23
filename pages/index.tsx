import Another from "./anotherPage";
import Header from "../Components/common/Header";
export default function Home() {
    type Remote<T> = (x: T) => T;

    const remoteChange: Remote<string> = (name) => {
        return `${name}, hello world!`;
    };
    return (
        <>
            <Header />
            <h1 style={{ fontSize: "3rem" }}>{remoteChange("dongmin")}</h1>
            <Another />
        </>
    );
}
