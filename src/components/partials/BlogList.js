const BlogList = ({blogs})=>{
    
    return (
        <div className="blog-list">
            {blogs.map((blog) =>(
                            <div className="Card" key={blog.id}>
                                <h4>{blog.title}</h4>
                                <p>{blog.description}</p>
                                <button onClick={() => console.log(blog.id)}>Delete</button>
                            </div>
                    ))}
        </div>
    );
}

export default BlogList;