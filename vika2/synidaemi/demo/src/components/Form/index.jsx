import Button from '../Button';
import styles from './style.module.css';

const Form = ({ onSubmit, children }) => {
    return (
        <div className={styles.container}>
            <form
                onSubmit={(ev) => {
                    ev.preventDefault();
                    onSubmit();
                }}
            >
                {children}
                <Button style={{ float: 'right' }} type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Form;
