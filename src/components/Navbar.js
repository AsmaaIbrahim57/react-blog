import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav>
            <h2>React Blog</h2>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">New blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;