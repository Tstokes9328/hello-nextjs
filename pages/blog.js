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
            <h2>{props.blog.title}</h2>
            <p>{props.blog.body}</p>
        </div>
    </Layout>
);

Blog.getInitialProps = async (context) => {
    //context will give you access to the route params, query and res obj in server
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`);
    const data = await response.json();

    return {
        blog: data
    }
};

export default withRouter(Blog);