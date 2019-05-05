import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Nav';

const Index = () => (
    <div>
    <Head>
        <title>Next App</title>
        <meta name="description" content="My SEO app with NextJs"/>
        <meta name="keywords" content="next seo react"/>
        <meta name="author" content="Tayte Stokes"/>
    </Head>
        <Nav />
        <h2>Home</h2>
        <Link href="/about">
            <a>Aboout</a>
        </Link>
    </div>
);

export default Index;