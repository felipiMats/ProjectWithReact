import styles from './Header.module.css';
import TodoLogoTipo from '../assets/TodoLogoTipo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={TodoLogoTipo} alt="Logotipo Todo List" />
        </header>
    );
}    