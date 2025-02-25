import styles from './EmptyTask.module.css'
import Logo from '../assets/Clipboard.png'

export function EmptyTask() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
