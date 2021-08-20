import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./partials/Loading";
import Error from "./partials/Error";

const BlogDetails = ()=> {

    const {id} = useParams();
    const {data:blog , isPending, error} = useFetch("http://localhost:8000/blogs/"+id)
    return (
        <div className="blog">
            {isPending && <Loading/>}
            {error && <Error/>}
            {blog &&
                <article>
                    <h2>{blog.name}</h2>
                    <p>{blog.description}</p>
                </article> 
            }
            
        </div>
    )

}
export default BlogDetails;