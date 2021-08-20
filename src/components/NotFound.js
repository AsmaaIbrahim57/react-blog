import { Link } from "react-router-dom";
const NotFound = () =>{
    return(
        <section>
            <h3>Sorry!</h3>
            <p>You're trying to access a page that is not found</p>
            <Link to="/">Back to homepage...</Link>
        </section>
    )
}

export default NotFound;