import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";
import Layout from "../components/layout/layout";

async function fetcher(url: RequestInfo) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default function ToDo() {
    const { data } = useSWR(
        "https://gorest.co.in/public/v1/todos",
        fetcher
    );

    const snaps = data?.data;

    data && console.log(data);

    return (
        <Layout>
            <Head>
                <title>What To Do</title>
            </Head>

            <main>
                <header>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>

                    <h1>What To Do</h1>
                    <h2>What we want to do "Next":</h2>
                    <h6>*)This page is useing JS</h6>
                </header>
            </main>

            <section>
                {snaps?.map((i: any, key: string) => (
                    <div key={key}>
                        <h3>{i.title} says:</h3>
                        <p>{i.status}</p>
                        <p>Due: {i.due_on}</p>
                        <hr />
                    </div>
                ))}
            </section>
        </Layout>
    );
}
