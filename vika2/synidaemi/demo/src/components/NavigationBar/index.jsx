import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

const NavigationBar = () => {
    return (
        <nav>
            <NavLink className={styles.navLink} to="/items">
                Items
            </NavLink>
            <NavLink className={styles.navLink} to="/login">
                Login
            </NavLink>
        </nav>
    );
};

export default NavigationBar;
