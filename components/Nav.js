import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/blogs">
            <a>Blogs</a>
        </Link>
    </div>
);

export default Nav;