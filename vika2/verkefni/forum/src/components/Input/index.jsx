import styles from './style.module.css';

const Input = ({ type = 'text', onChange, label = '', placeholder = '', error, value = '' }) => {
    return (
        <div className={styles.container}>
            {label && <p className={styles.label}>{label}</p>}
            {type === 'textarea' ? (
                <textarea value={value} onChange={onChange} placeholder={placeholder} />
            ) : (
                <input value={value} type={type} onChange={onChange} placeholder={placeholder} />
            )}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default Input;
