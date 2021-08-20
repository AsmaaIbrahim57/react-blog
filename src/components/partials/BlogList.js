import { Link } from "react-router-dom";

const BlogList = ({blogs})=>{
    
    const handleDelete = (id) =>{

        fetch("http://localhost:8000/blogs/"+id,{
            method: "DELETE",
        }).then(()=>{
            window.location.reload()
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
                        <button onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                           
            ))}
        </div>
    );
}

export default BlogList;