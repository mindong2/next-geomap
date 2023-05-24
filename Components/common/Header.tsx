import Link from "next/link";
import styles from "../../style/header.module.scss";
import Image from "next/image";
import Logo from '../../public/images/logo.png'

interface IHeader {
    rightElements ?: React.ReactElement[];
}

const Header = ({ rightElements } : IHeader) => {
    return (
        <header className={styles.header}>
            <div className={styles.flexItem}>
                <Link href="/" className={styles.box} aria-label="홈으로 이동">
                    <Image
                    src={Logo}
                    height={20} alt="Logo" />
                    My Map Service
                </Link>
            </div>
            {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
        </header>
    );
};

export default Header;
