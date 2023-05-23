/* server에서는 window 객체를 알지 못하므로 useEffect 밖에서 사용할 경우 에러 
   innerWidth값은 서버에서 렌더링 하지 않았기때문에 렌더링 전 HTML파일에서 제거된다.
*/

const NoSSR = () => {
    return <p>width: {window.innerWidth}</p>;
};

export default NoSSR;
