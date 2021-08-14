import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout/layout";
import { getAllPostsId, getPostData } from "../../lib/posts";

interface Context {
    params: {
        id: string
    }
}

interface Post {
    postData: {
        title: string,
        date: string,
        id: string,
        contentHtml: any
    }
}

export async function getStaticPaths() {
    const paths = getAllPostsId();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: Context) {
    const postData = await getPostData(params.id);
    console.log(postData)
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }: Post) {
    const router = useRouter()

    return(
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <div>
                <div>
                    <a onClick={() => router.push('/')} >Back to home page</a>
                </div>

                {postData.title}
                <br/>
                <Date dateString={postData.date} />
                <br/>
                {postData.id}
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
        </Layout>
    )
}