import styles from './App.module.css'
import Logo from './assets/Logo.svg'

import { useState } from "react";

import { Task } from './components/Task.tsx'

export function App() {
  const [tasks, setTasks] = useState<{ text: string; isCompleted: boolean }[]>([]);
  const [newTask, setNewTask] = useState("");

  //Adicionar nova task
  function handleAddTask() {
    if (newTask.trim() === "") return;
    
    setTasks([...tasks, { text: newTask, isCompleted: false }]);
    setNewTask("");
  }

  // Function to delete a task
  function handleDeleteTask(taskToDelete: string) {
    setTasks(tasks.filter((task) => task.text !== taskToDelete));
  }

  // Function to toggle completion of a task
  function handleToggleComplete(taskText: string) {
    setTasks(tasks.map(task => 
        task.text === taskText ? { ...task, isCompleted: !task.isCompleted } : task
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
            {tasks.map((task, index) => (
              <Task 
                key={index} 
                text={task.text}
                isCompleted={task.isCompleted}
                onDelete={() => handleDeleteTask(task.text)}
                onToggleComplete={() => handleToggleComplete(task.text)}
              />
            ))}
          </div>
        </div>

      </div>
    )
}
