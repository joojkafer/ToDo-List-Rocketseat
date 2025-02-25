import styles from './App.module.css'
import Logo from './assets/Logo.svg'

import { useState } from "react";

import { Task } from './components/Task.tsx'

interface TaskType {
  id: string;
  text: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState("");

  //Adicionar nova task
  function handleAddTask() {
    if (newTask.trim() === "") return;
    const newTaskObject: TaskType = {
        id: crypto.randomUUID(), // Generates a unique ID
        text: newTask,
        isCompleted: false
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask("");
}

  // Function to delete a task
  function handleDeleteTask(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
}

  // Function to toggle completion of a task
  function handleToggleComplete(taskId: string) {
    setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  }

  // Count of completed tasks
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  const totalTasks = tasks.length;

  return (
      <div>
        <header className={styles.header}>
            <img src={Logo}/>
        </header>
        
        <div className={styles.wrapper}>
          {/* Textbox */}
          <div className={styles.textBox}>
            <textarea
              required
              placeholder='Adicione uma nova tarefa'
              value={newTask}
              onChange ={(e) => setNewTask(e.target.value)}
            />
          </div>

          {/* Create button */}
          <div className={styles.createButton}>
            <button className={styles.btn} onClick={handleAddTask}>
              Criar
            </button>
          </div>
        </div>

        {/* Task Counter */}
        <div className={styles.mainTaskList}>
          <div className={styles.taskCounter}>
            <span className={styles.createdTasks}> Tarefas Criadas: {totalTasks}</span>
            <span className={styles.completedTasks}> Concluídas: {completedTasks}</span>
          </div>

          <div className={styles.taskList}>
            {tasks.map((task) => (
              <Task 
                key={task.id} 
                id={task.id}
                text={task.text} 
                isCompleted={task.isCompleted} 
                onDelete={handleDeleteTask} 
                onToggleComplete={handleToggleComplete}
              />
            ))}
          </div>
        </div>

      </div>
    )
}
