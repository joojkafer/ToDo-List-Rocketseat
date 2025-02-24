import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react';

interface TaskProps{
    text: string;
    isCompleted: boolean;
    onDelete: () => void;
    onToggleComplete: () => void;
}

export function Task({ text, isCompleted, onDelete, onToggleComplete }: TaskProps) {
    return(
        <div className={styles.taskComp}>
            <input 
                type="checkbox" 
                className={styles.checkbox}
                checked={isCompleted}
                onChange={onToggleComplete}
            />
            <span className={`${styles.taskText} ${isCompleted ? styles.completedText : ""}`}>
                {text}
            </span>

            <button className={styles.trashButton} onClick={onDelete}>
                <Trash size={24} />
            </button>
        </div>
    )
}