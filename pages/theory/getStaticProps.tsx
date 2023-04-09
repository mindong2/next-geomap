import type { NextPage } from "next";

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getStaticProps Page</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;

export async function getStaticProps() {
  const delayInSeconds = 2; //2초간 Pending 후 HTML 업데이트
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(1), delayInSeconds * 1000)
  ); // 개발환경에서는 계속해서 값이바뀌기 때문에 build

  return {
    // revalidate를 하더라고 data값이 바뀌지 않으면 next는 pre-rendering을 하지 않는다.
    props: { data },
    /*
    이미 build된 사이트에서 정적인 페이지를 업데이트 할수있다.
    5초마다 (request요청을 받은지 5초 후) 다시 이 함수를 실행해서 만약 데이터가 바뀌었으면
    -> 미리 pre-rendering (Etag변경)
    -> 그렇지 않다면 pre-rendering을 다시 수행하지 않는다. 
     해당페이지만 update하기때문에 전체페이지를 build할 필요가 없다. */
    revalidate: 5 /** https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration */,
  };
}
