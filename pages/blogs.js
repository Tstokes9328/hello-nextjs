import Head from 'next/head';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Error from '../pages/_error';

const Blog = (props) => {
    //check for error
    if (props.data.length === 0) return <Error message="Could not load blogs, Please try again"/>

    return (
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
    )
}


//anything return from this function will be available via props in our component
//getInitialProps loads data to the server for the first time then to the client everytime after
Blog.getInitialProps = async () => {
    let data;
    //use a try catch block
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        data = await response.json();
        return {
            data
        };
    } catch (err) {
        console.log(err);
        data = [];
    }
};

export default Blog;