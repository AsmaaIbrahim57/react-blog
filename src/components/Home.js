import { useState } from "react";

const Home = () =>{

    const [name,setName] = useState('Eman');
    const handleClick = ()=>{
        setName("Asmaa");
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
        </section>
    );
}

export default Home;