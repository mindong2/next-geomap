import type { NextPage } from "next";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

/* 
  SSR로 import하고싶지 않을경우 일반적인 import문이 아니라 아래와같이 사용
  서버에서는 window등을 찾을수 없으므로 일반적으로 import를 하면 window is not defined가 뜨게된다.
  */

/** https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr */
const NoSSR = dynamic(() => import("../../Components/theory/NoSSR"), {
    ssr: false,
});

const Example: NextPage = () => {
    const [data, setData] = useState(0);

    useEffect(() => {
        const delayInSeconds = 2;
        new Promise<number>((resolve) => setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)).then((result) => setData(result));
    }, []);

    return (
        <main>
            <h1>Client-side data fetching</h1>
            <p>값: {data}</p>

            <h1>no SSR</h1>
            <NoSSR />
        </main>
    );
};

export default Example;
