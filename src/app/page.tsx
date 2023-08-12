import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.title}>
        Welcome To Coding Style By <h1>Liaqat Saeed</h1>
      </div>

      <div className={styles.grid}>
        <Link href="/login">Login</Link>
      </div>
      </>
  );
}



