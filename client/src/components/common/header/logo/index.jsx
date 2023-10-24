import { Link } from "react-router-dom";

// Styles
import styles from './logo.module.scss';

const Logo = () => {
    return (
        <Link to="/" className={styles['logo']}>Logo</Link>
    );
}

export default Logo;