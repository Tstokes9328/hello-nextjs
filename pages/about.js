import Link from 'next/link';
import Layout from '../components/Layout';


const About = () => (
    <Layout 
        mainTitle="My About Page Built With NextJS" 
        footer={`Copyright ${new Date().getFullYear()}`}
    >
        <h2>About</h2>
        <p>
            This is a really cool p tag
        </p>

        <style jsx>{`
            p {
                color: indigo;
                font-size: 20px;
            }
        `}</style>
    </Layout>
);

export default About;