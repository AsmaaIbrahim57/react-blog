import { useState } from "react";
import BlogList from "./partials/BlogList";
const Home = () =>{

    const [name,setName] = useState('Eman');
    const [blogs,setBlogs] = useState([
        {title: "blog1" , description: "blog1 description", id:1},
        {title: "blog2" , description: "blog2 description", id:2},
        {title: "blog3" , description: "blog3 description", id:3},

    ]);
    const handleClick = ()=>{
        setName("Asmaa");
    };
    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    };
    return (
        <section >
            <h1>
                Home
            </h1>
            <p> My name is {name}</p>
            <div>
                <button onClick={handleClick}>Click Me!</button>
            </div>
            <br/>

            <div className="blogs">
                <h2>The Blogs</h2>
                <div className="blogs-content">
                    <BlogList blogs={blogs} handleDelete={handleDelete}/>
                    <br/>
                    <BlogList blogs={blogs.filter((blog) => blog.id===2)} handleDelete={handleDelete}/>
                </div>
            </div>
        </section>
    );
}

export default Home;