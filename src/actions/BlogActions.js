var id = 0;

export const addAction = (blog)=>{
    console.log("id before",id)
    return {
        type: "ADD_BLOG",
        payload:{
            title: blog.title,
            description: blog.description,
            author: blog.author,
            id: ++id
        }
    }
}

export const deleteAction = (blogId)=>{
    return{
        type: "DELETE_BLOG",
        payload:{
            id:blogId
        }
    }
}

export default addAction;