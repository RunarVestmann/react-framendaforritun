import { useState } from 'react';
import { getActivity } from '../../services/activityService';
import styles from './style.module.css';

const Activity = () => {
    const [activity, setActivity] = useState('Are you bored?');
    return (
        <div className={styles.container}>
            <p className={styles.activity}>{activity}</p>
            <button onClick={async () => setActivity(await getActivity())} className={styles.button} type="button">
                I'm bored
            </button>
        </div>
    );
};

export default Activity;
