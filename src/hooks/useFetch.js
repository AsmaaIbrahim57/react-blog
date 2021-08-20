import { useState, useEffect } from "react";

const useFetch = (url)=>{

    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(()=>{
        fetch(url)
            .then(res=>{
                console.log(res)
                if(!res.ok){
                    throw Error("Couldn't handle request");
                }
                return res.json();
    
            })
            .then(data=>{
                console.log("data",data);
                setData(data);
                setIsPending(false);
            }).catch(err=>{
                setError(err.message);
            });
        
    },[url]);
    return {data, isPending, error};
}

export default useFetch;