import styles from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

interface TaskProps {
    id: string;
    text: string;
    isCompleted: boolean;
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
}

export function Task({ id, text, isCompleted, onDelete, onToggleComplete }: TaskProps) {
    return (
        <div className={styles.taskComp}>
            <input 
                type="checkbox" 
                className={styles.checkbox} 
                checked={isCompleted} 
                onChange={() => onToggleComplete(id)} 
            />
            <span className={`${styles.taskText} ${isCompleted ? styles.completedText : ""}`}>
                {text}
            </span>
            <button className={styles.trashButton} onClick={() => onDelete(id)}>
                <Trash size={20} />
            </button>
        </div>
    );
}
