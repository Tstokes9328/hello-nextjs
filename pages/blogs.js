import Head from 'next/head';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Blog = (props) => (
    <Layout
        mainTitle="Check out the blogs"
        footer={`Copyright ${new Date().getFullYear()}`}
    >
        <Head>
            <title>Blogs</title>
        </Head>

        <h2>Blogs</h2>
        
        <hr />

        {
            props.data.map((blog, index) => (
                <Link key={index} href={`/blog/?id=${blog.id}`}>
                    <h4>{blog.title}</h4>
                </Link>
            ))
        }
    </Layout>
);


//anything return from this function will be available via props in our component
//getInitialProps loads data to the server for the first time then to the client everytime after
Blog.getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    console.log(data);

    //this console log will execute in the server console first and then after re-routing to the page in the client it will log in the client

    return {
        data
    };
};

export default Blog;