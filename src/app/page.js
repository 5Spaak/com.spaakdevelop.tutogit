import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/cv">cv</Link>
      <Link href="/jeu">jeu</Link>
      <Link href="/testApi">TestApi</Link>
    </main>
  );
}
