import Link from "next/link";
import styles from "../../style/header.module.scss";
const Header = () => {
    return (
        <header>
            <div className={styles.flexItem}>
                <Link href="/" className={styles.box} aria-label="홈으로 이동">
                    <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" height={20} alt="Logo" />
                    My Map Service
                </Link>
            </div>
        </header>
    );
};

export default Header;
