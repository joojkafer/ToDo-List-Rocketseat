import styles from './App.module.css'
import Logo from './assets/Logo.svg'
//import { Rocket } from "@phosphor-icons/react";

export function App() {
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
            />
          </div>

          {/* Create button */}
          <div className={styles.createButton}>
            <button className={styles.btn}>
              Criar
            </button>
          </div>
        </div>

      </div>
    )
}
