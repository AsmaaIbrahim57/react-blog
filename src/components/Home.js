import BlogList from "./partials/BlogList";
import useFetch from "../hooks/useFetch";

import { connect, useSelector } from "react-redux";
const Home = () =>{

    const { data, isPending, error} = useFetch("http://localhost:8000/blogs");
    const selectBlogs = state => state.blogs

    const blogs= useSelector(selectBlogs);
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

const mapToProps = state =>({
    blogs: state.blogs
})

export default connect(mapToProps)(Home);