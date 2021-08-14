import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";

export async function getStaticProps() {
    const res = await fetch('https://gorest.co.in/public/v1/comments')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

export default function Music({ data }: InferGetServerSidePropsType<typeof getStaticProps>) {    
    const snaps = data.data

    console.log(snaps)

    return (
        <Layout>
            <Head>
                <title>What They Say</title>
            </Head>

            <main>
                <header>
                    <Link href='/' >
                        <a>Back to home</a>
                    </Link>

                    <h1>What They Say</h1>
                    <h2>What they say about our company:</h2>
                </header>

                <section>
                    {snaps.map((i: any, key: string) => (
                        <div key={key} >
                            <p>{i.name} says:</p>
                            <h3>{i.body}</h3>
                            <p>email: {i.email}</p>
                            <hr/>
                        </div>
                    ))}
                </section>
            </main>
        </Layout>
    )
}