import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react';

export function Task() {
    return(
        <div className={styles.taskComp}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.taskText}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. 
                Duis vel sed fames integer. adasdadasdasdasd
            </span>

            <button className={styles.trashButton}>
                <Trash size={24} />
            </button>
        </div>
    )
}