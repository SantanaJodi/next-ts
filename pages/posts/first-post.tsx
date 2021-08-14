import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <div>
                <h1>First Post</h1>
                <h2>
                    <Link href='/' >
                        <a>Back to home</a>
                    </Link>
                </h2>
            </div>
        </Layout>
    )
}