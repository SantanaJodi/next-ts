import styles from './layout.module.css';

interface Props {
    children: JSX.IntrinsicAttributes
}

export default function Layout({ children }: Props) {
    return <div className={styles.container} >{children}</div>
}