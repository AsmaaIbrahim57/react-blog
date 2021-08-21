const initState = {
    blogs:[]
}



export const blogReducer = (state= initState,action) =>{

    switch(action.type){
        case 'ADD_BLOG' :{
            let newBlog = {
                    title: action.payload.title ,
                    description: action.payload.description, 
                    author: action.payload.author, 
                    id: action.payload.id
                }
            return{
                ...state,
                blogs:[...state.blogs,newBlog]

            }   
            
        }

        case 'DELETE_BLOG':{
            let newBlogs = state.blogs.filter(blog=>blog.id !== action.payload.id);
            return {
                ...state,
                blogs: newBlogs
            }
            
        }

        default:
            return state;
    }
    console.log("state",state.blogs)
}

export default blogReducer;