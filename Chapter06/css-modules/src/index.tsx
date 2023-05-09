// Dependencies
import { createRoot } from 'react-dom/client'
import styles from './index.css'

// Components
const Button = () => <button className={styles.button}>Click me!</button> // This is for css modules

createRoot(document.getElementById('root') as HTMLElement).render(<Button />)   