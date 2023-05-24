/** https://nextjs.org/docs/api-reference/next/image */
import type { NextPage } from 'next';
import Image from 'next/image';
import LegacyImage from 'next/legacy/image';
import example from '/public/example.jpg';

/*
    next-Image의 장점
    1. Webp형식으로 이미지 자동 최적화 (quality 속성으로 정도 조절가능 default: 75)
    2. placeholder = "blur" -> 이미지가 보이기전 blur
    3. lazy loading 지원 (이미지 근처로갈때만 렌더링)
    4. legacy는 img태그 위에 span태그 생성 13부터는 img단독 태그
*/
const Images: NextPage = () => {
  return (
    <main>
      {/* loading check */}
      {/*<section style={{ height: '500vh' }}>long long content</section>*/}

      <hr style={{ margin: '32px 0' }} />

      {/*<h1>img tag</h1>*/}

      {/*<figure>*/}
      {/*  <img*/}
      {/*    src="https://inflearn-nextjs.vercel.app/example.jpg"*/}
      {/*    alt="example"*/}
      {/*    width={500}*/}
      {/*    height={100}*/}
      {/*    https://web.dev/browser-level-image-lazy-loading/ */}
      {/*    // loading="lazy"*/}
      {/*  />*/}
      {/*  <figcaption>example img</figcaption>*/}
      {/*</figure>*/}

      {/*<hr style={{ margin: '32px 0' }} />*/}

      <h1>next/image</h1>

      <figure>
        {/* - Static하게 이미지를 불러올때 */}
        <Image
          src={example}
          alt="v13 image"
          // width={500}
          // height={100}
          // placeholder="blur"
        />
        <figcaption>v13 image</figcaption>
      </figure>

      <figure>
        {/* 
            - 외부링크에서 이미지를 불러올때
            이미지의 크기를 미리알수없기때문에 width, height를 미리 명시해야한다
            (next가 미리 크기를 맞춰 정적으로 이미지를 제공할수 있기때문)
         */}
        <Image
          src="https://inflearn-nextjs.vercel.app/example.jpg"
          alt="v13 image"
          width={500}
          height={100}
        />
        <figcaption>v13 image</figcaption>
      </figure>

      {/* import하지않고 string으로 그냥 넣을경우 ERROR */}
      {/*<figure>*/}
      {/*  <Image src="/example.jpg" alt="v13 image" />*/}
      {/*  <figcaption>v13 image</figcaption>*/}
      {/*</figure>*/}


        {/* 혹여 이미지의 사이즈를 모를때는 fill 속성을 넣을수있다
            -> 부모에 의해 사이즈결정
            부모에 position 정의

            그리고 외부 이미지 사용을 막았을때는 next.config.js 에 domain속성 검색
        */}
      <figure style={{ position: 'relative', width: '500px', height: '100px' }}>
        <Image
          src="https://inflearn-nextjs.vercel.app/example.jpg"
          alt="v13 fill"
          fill
          style={{ objectFit: 'cover' }}
        />
      </figure>

      <hr style={{ margin: '32px 0' }} />

      <h1>next/legacy/image</h1>

      {/** statically import */}
      <figure>
        <LegacyImage src={example} alt="example image" />
        <figcaption>intrinsic static image</figcaption>
      </figure>

      {/* ERROR */}
      {/*<figure>*/}
      {/*  <Image src="/example.jpg" alt="example" />*/}
      {/*  <figcaption>example image</figcaption>*/}
      {/*</figure>*/}

      {/** path string */}
      <figure>
        <LegacyImage
          src="/example.jpg"
          alt="intrinsic image"
          width={500}
          height={100}
        />
        <figcaption>intrinsic remote image</figcaption>
      </figure>

      <figure>
        <LegacyImage
          src={example}
          alt="fixed image"
          layout="fixed"
          width={500}
          height={100}
        />
        <figcaption>fixed image</figcaption>
      </figure>

      <figure>
        <LegacyImage
          src={example}
          alt="responsive image"
          layout="responsive"
          width={500}
          height={100}
        />
        <figcaption>responsive image</figcaption>
      </figure>

      <figure>
        <div style={{ width: 500, height: 100, position: 'relative' }}>
          <LegacyImage
            src="/example.jpg"
            alt="fill image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <figcaption>fill image</figcaption>
      </figure>

      <hr style={{ margin: '32px 0' }} />
    </main>
  );
};

export default Images;
