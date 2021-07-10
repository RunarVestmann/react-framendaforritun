import Activity from '../../components/Activity';
import styles from './style.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Stop being bored</h1>
            <Activity />
        </div>
    );
};

export default Home;
