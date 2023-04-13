import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HELLO WOLD!</h1>
      {/* <Link href='/about'>Go To About Page</Link> */}
      <p>
        <Link href='/user'>Users</Link>
      </p>
    </main>
  )
}
