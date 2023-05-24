import Link from "next/link";
import Header from "../Components/common/Header";
import styles from "../style/header.module.scss";
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
const Feedback = () => {
    return (
        <>
            <Header 
              rightElements={[
                <button
                  onClick={() => alert('복사')}
                  className={styles.box}
                  style={{ marginRight: 8 }}
                  aria-label="현재 위치 클립보드 복사"
                  key="button"
                >
                  <AiOutlineShareAlt size={20} color="#444444" />
                </button>,
                <Link
                  href="/feedback"
                  className={styles.box}
                  aria-label="피드백 페이지로 이동"
                  key="link"
                >
                  <VscFeedback size={20} color="#444444" />
                </Link>
            ]}
            />      
        </>
    );
};

export default Feedback;