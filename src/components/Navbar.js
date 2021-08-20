import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav style={styles.mainNav}>
            <h2>React Blog</h2>
            <ul style={styles.links}>
                <li style={styles.link}>
                    <Link to="/">Home</Link>
                </li>
                <li style={styles.link}>
                    <Link to="/create">New blog</Link>
                </li>
            </ul>
        </nav>
    )
};

const styles = {
    mainNav:{
        display:"flex",
        justifyContent: "space-around"
    },
    links:{
        display: "flex",
        listStyle: "none"

    },
    link:{
        textDecoration: "none",
        marginRight: "2rem"
    }
}

export default Navbar;