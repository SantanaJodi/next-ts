import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout/layout'
import { InferGetServerSidePropsType } from 'next'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostData = getSortedPostsData()

  return {
    props: {
      allPostData
    }
  }
}

export default function Home({ allPostData }: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Read{' '}
          <Link href='/posts/first-post' >
            <a>this page !</a>
          </Link>
        </h1>

        {/* use Link because it's faster */}
        {/* <a href='/posts/first-post' >first-post useing tag a - slower</a> */}

        <ul className={styles.tablist} >
          <li>
            <Link href='/about' >
              <a >About Us</a>
            </Link>
          </li>

          <li>
            <Link href='/testimonials' >
              <a >Testimonials - Using getStaticProps</a>
            </Link>
          </li>

          <li>
            <Link href='/todo' >
              <a >To Do{"'"}s - Using SWR</a>
            </Link>
          </li>
        </ul>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      {/* Add this <section> tag below the existing <section> tag */}
      {/* To show formated markdown (.md) vin HTML use this https://stackoverflow.com/questions/37770620/how-to-include-markdown-md-files-inside-html-files */}
      <section>
        <h2 >Blog</h2>

        <ul>
          {allPostData.map(({ id, date, title, content }: any ) => (
            <li key={id}>
              <Link href={`/posts/${id}`} >
                <a>{title}</a>
              </Link>
              <br />
              <small >
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/images/profile.jpeg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  )
}
