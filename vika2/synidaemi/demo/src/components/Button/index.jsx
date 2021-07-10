import styles from './style.module.css';

const Button = ({ children, onClick, style = {}, type = 'button' }) => {
    return (
        <button className={styles.button} type={type} onClick={onClick} style={style}>
            {children}
        </button>
    );
};

export default Button;
