import React, { useState } from "react"
import Child from "./Child"
function Parent(props){
    const [post, setPost] = useState([])
    const change= (e) => {
        setPost(e);
    }
    return(
        <div>
    <form >
    <table>
    
    <thead>
        <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {post.map((e)=>(
            <tr>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
            </tr>
        ))}
    </tbody>
    </table>
    </form>
    <Child data1={change} />
        </div>
    )
}
export default Parent