import Nav from './Nav';

const Layout = (props) => (
    <div>
        <Nav />
        <h1>{props.mainTitle}</h1>
        <hr />
        {props.children}
        <hr />
        <h4>{props.footer}</h4>
    </div>
);

export default Layout;