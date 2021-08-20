import { useState } from "react";
import { useHistory } from "react-router";
const CreateBlog = () =>{

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('peter');

    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,description,author};
        setIsPending(true);

        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsSuccess(true);
            setIsPending(false);
            setTimeout(()=>{
                history.push('/')
            },3000)
        })
    }
    return (
        <div className="new-blog">
            <h2>Create New Blog</h2>
            {isSuccess && <h4>Blog has been created successfully!</h4>}
            <form onSubmit={handleSubmit}>
                <div >
                    <label>Title:</label>
                    <input 
                        type="text"
                        value={title}
                        onChange = {(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div >
                    <label>Body:</label>
                    <textarea
                        value={description}
                        onChange = {(e)=>setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label>Author:</label>
                    <select
                        value={author}
                        onChange = {(e)=>setAuthor(e.target.value)}
                    >
                        <option value="mario">Mario</option>
                        <option value="peter">Peter</option>
                    </select>
                </div>

                {!isPending && <button type="submit">Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}

            </form>
            <div>
                <div>{title}</div>
                <div>{description}</div>
                <div>{author}</div>
            </div>
        </div>
    )
}

export default CreateBlog;