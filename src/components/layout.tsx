 
import styles from "./layout.module.css";

interface ILayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  return (
    <main className={styles.main}>{children}</main>
  )
}