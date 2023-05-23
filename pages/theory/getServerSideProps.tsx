import type { GetServerSideProps, NextPage } from "next";

interface Props {
    data: number;
}

const Example: NextPage<Props> = ({ data }) => {
    return (
        <main>
            <h1>getServerSideProps Page</h1>
            <p>값: {data}</p>
        </main>
    );
};

export default Example;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    /** https://web.dev/i18n/ko/stale-while-revalidate/ */
    // This value is considered fresh for five seconds (s-maxage=5).
    // If a request is repeated within the next 5 seconds, the previously
    // cached value will still be fresh.
    //
    // If the request is repeated before 5~15 seconds,
    // the cached value will be stale but still render (stale-while-revalidate=10).
    //
    // In the background, a revalidation request will be made to populate the cache
    // with a fresh value. If you refresh the page, you will see the new value.

    /* 캐시 컨트롤 헤더로 SSR에서도 revalidate를 적용할수있다. 
    5초 이내 -> HIT, 5초 ~15초 사이 -> STABLE (pre-rendering), 15초 이후 -> 다시 2초 pending 후 불러옴*/
    res.setHeader("Cache-Control", "public, s-maxage=5, stale-while-revalidate=10");

    const delayInSeconds = 2;
    //   getStaticProps와 다르게 2초간 pending후 rendering -> SSG와 달리 build time에 pre-rendering되지 않는다.
    const data = await new Promise((resolve) => setTimeout(() => resolve(Math.random()), delayInSeconds * 1000));

    return {
        props: { data },
    };
};
