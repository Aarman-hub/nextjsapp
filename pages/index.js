import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Home">
      <div className={styles.container}>
          <h1 className='text-3xl font-bold underline'>Hello from NextJs</h1>
      </div>
    </Layout>
  )
}
