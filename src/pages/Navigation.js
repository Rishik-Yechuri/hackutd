import { Outlet, Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
                <li>
                    <Link to="/friends">Friends</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
}