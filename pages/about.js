import Link from 'next/link';

const myStyle = {color: 'red', borderLeft: '5px solid black', padding: '5px'};

const About = () => (
    <div>
        <h2>About</h2>
        <Link href="/">
            <a style={myStyle}>Home</a>
        </Link>

        <p>
            This is a really cool p tag
        </p>

        <style jsx>{`
            p {
                color: indigo;
                font-size: 20px;
            }
        `}</style>
    </div>
);

export default About;