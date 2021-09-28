import React, {useState} from 'react'
import axios from "axios"

function APIfetch() {
    const url="https://jsonplaceholder.typicode.com/posts"
    const [data, setPosts]=useState(
        {
            userid:"",
            id:"",
            title:"",
            body:""
        }
    )
    function Submit(e){
        e.preventDefault();
        axios.post(url,{
            title: data.title,
            body: data.body
        })
        .then(res=>{
            console.log(data)
        })
    }

    function fetchPosts(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setPosts(newData)
           console.log(newData)
        
    }

    return (
        <div>
            <form onSubmit={(e)=> Submit(e)}>
                <label htmlFor="text">Write text:</label>
                <input type="text" onChange={(e) =>fetchPosts(e)} value={data.title} id="title" placeholder="Title"/>
                <input type="text" onChange={(e) =>fetchPosts(e)} value={data.body} id="body" placeholder="body" />
               <button>Submit</button>
            </form>
        </div>
    )
}

export default APIfetch
