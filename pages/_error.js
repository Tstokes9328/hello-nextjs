import Layout from '../components/Layout';

const Error = (props) => (
    <Layout mainTitle="Error">
        <div>
            <p>{props.message}</p>
        </div>
    </Layout>
);

export default Error;