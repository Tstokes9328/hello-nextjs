import Head from 'next/head';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router';

const Blog = (props) => (
    <Layout mainTitle="Single Blog">
        <Head>
            <title>Blog</title>
        </Head>

        <div>
            {props.router.query.id}
        </div>
    </Layout>
);

export default withRouter(Blog);