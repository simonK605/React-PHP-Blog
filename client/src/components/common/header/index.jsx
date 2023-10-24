// Styles
import styles from './header.module.scss';

// Components
import Wrapper from "../wrapper";
import Logo from "./logo";

const Header = () => {
    return (
        <header className={styles['header']}>
            <Wrapper>
                <div className={styles['header__cont']}>
                    <Logo />
                </div>
            </Wrapper>
        </header>
    )
}

export default Header;