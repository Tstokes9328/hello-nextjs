import Layout from '../components/Layout';
import Head from 'next/head';

const About = () => (
    <Layout
        mainTitle="My About Page Built With NextJS"
        footer={`Copyright ${new Date().getFullYear()}`}
    >
        <Head>
            <title>About</title>
        </Head>

        <h2>About</h2>

    </Layout>
);

export default About;