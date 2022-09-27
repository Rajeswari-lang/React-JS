import React, { useState } from 'react'
import CTOPForm from './CTOPForm';
// import Form from './Form';
function CTOPTable() {
    const[post, setPost] = useState([])
    const[val,setValue]=useState()
   const change=(e)=>{
      setPost(e);
    }
    const deleteHandle=(i)=>{
        post.splice(i,1)
        var a=[...post]
      setValue(a)
    }
  return (
    <div>
      <table>
    
    <thead>
        <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {post.map((e,i)=>(
            <tr key={i}>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
                <td>
                    <button onClick={()=>deleteHandle(i)}>Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
      <CTOPForm data1={change}/>
    </div>
  )
}
export default CTOPTable
