import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Links = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/theory/getStaticProps");
  }, [router]);
  return (
    <main>
      <h1>links</h1>
      <button
        onClick={() => {
          /* prefetch없이 push하면 pre-rendering이 안되므로 useEffect로 코드구현
            특별한 경우가 아니라면 next/link 사용을 권장.
          */
          router.push("/theory/getStaticProps");
        }}
      >
        getStaticProps
      </button>

      <div style={{ height: "200vh", background: "red" }}></div>
      {/* 
        next/link를 이용할경우 해당페이지의 정보를 json파일로 가지고있다. CSR방식으로 DOM rendering가능
        next는 불필요한 렌더링을 지양하기때문에 해당 위치로 올때 파일을 렌더링 (200vh div태그 내에서는 Link tag 렌더링X)
      */}
      <Link href="/theory/getStaticProps" passHref>
        getStaticProps
      </Link>

      {/* a태그를 사용하면 매번 HTML파일을 가져와야한다. */}
      {/* <a href="/theory/getStaticProps">getStaticProps</a> */}
    </main>
  );
};

export default Links;
