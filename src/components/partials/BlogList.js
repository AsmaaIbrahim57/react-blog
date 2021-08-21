import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAction } from "../../actions/BlogActions";
import { Button } from "@material-ui/core";

const BlogList = ({blogs})=>{
    const dispatch = useDispatch();

    const handleDelete = (id) =>{

        fetch("http://localhost:8000/blogs/"+id,{
            method: "DELETE",
        }).then(()=>{
            dispatch(deleteAction(id));
            // window.location.reload()
        })

    };
   
    return (
        <div className="blog-list">
            {blogs.map((blog) =>(
                    <div className="Card" key={blog.id}>
                        <Link to ={"/blogs/" + blog.id}>
                            <h2>{blog.title}</h2>
                        </Link>
                        <h4>{blog.author}</h4>
                        <p>{blog.description}</p>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(blog.id)}>
                            Delete
                        </Button>
                    </div>
                           
            ))}
        </div>
    );
}

export default BlogList;