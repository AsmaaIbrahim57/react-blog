import { useState } from "react";
import BlogList from "./partials/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () =>{

    const { data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    
    return (
        <section >
            
            <div className="blogs">
                <h2>The Blogs</h2>
                { error && <span>{error}</span> }
                { isPending && <div> Loading...</div> }
                
                {
                    blogs &&
                    <div className="blogs-content">
                        <BlogList blogs={blogs} />
                        <br/>
                        {
                            blogs.map(blog => (
                                blog.id===2?(
                                    <span key={blog.id} >Hi</span>
                                ):null
                            ))
                        }
                    </div>
                }
            </div>
        </section>
    );
}

export default Home;