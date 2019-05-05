import Link from 'next/link';

const Index = () => (
    <div>
        <h2>Home</h2>
        <Link href="/about">
            <a>Aboout</a>
        </Link>
    </div>
);

export default Index;