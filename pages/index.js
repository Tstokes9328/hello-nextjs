import Head from 'next/head';

import Layout from '../components/Layout';

const Index = () => (
    <Layout 
        mainTitle="My Home Page Built With NextJS" 
        footer={`Copyright ${new Date().getFullYear()}`}
    >
        <Head>
            <title>Next App</title>
        </Head>

    </Layout>
);

export default Index;