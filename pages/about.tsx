import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout/layout'

const MyComponent = () => <Image src='/images/profile.jpeg' height={144} width={144} alt='Target Santana' />

export default function About() {
    return (
        <Layout>
            <h1>This Is An About Page</h1>
            <h2>
                <Link href='/' >
                    <a>Back to home</a>
                </Link>
            </h2>

            <MyComponent />
        </Layout>
    )
}
