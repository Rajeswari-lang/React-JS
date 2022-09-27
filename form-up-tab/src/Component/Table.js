import React, { useState } from 'react';

function Table(props) {
    const[value,setValue]=useState(props.data1)
   const  deleterow=(index)=>{
    const rs=props.data1.splice(index,1)
    setValue(rs)
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
        {props.data1.map((e,index)=>(
            <tr key={index}>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
                <td>
                    <button onClick={()=>deleterow(index)}>Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
    </div>
  );
}

export default Table;
