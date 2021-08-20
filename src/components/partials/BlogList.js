import { Link } from "react-router-dom";

const BlogList = ({blogs})=>{
    
    return (
        <div className="blog-list">
            {blogs.map((blog) =>(
                <Link to ={"/blogs/" + blog.id} key={blog.id}>
                    <div className="Card" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <h4>{blog.author}</h4>
                        <p>{blog.description}</p>
                        <button onClick={() => console.log(blog.id)}>Delete</button>
                    </div>
                </Link>
                           
            ))}
        </div>
    );
}

export default BlogList;