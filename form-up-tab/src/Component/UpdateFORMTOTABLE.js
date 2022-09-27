import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateFORMTOTABLE() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [arr, setArr] = useState([])
const[value,setValue] = useState([])
const[update,setUpdate] = useState([])
const [show,setShow] = useState(false);
const[index1, setindex1] = useState("")

const handleClose = () => {
    arr.map((data,index)=>{
        if(index===index1){
            data.firstname=firstname
        }
    })
    setShow(false)};

const handleShow = () =>{
    setShow(true);
} 


const handleFirstName = (e) => {
    setFirstName(e.target.value)
}
const handleLastName = (e) => {
    setLastName(e.target.value)
}
const handleEmail = (e) => {
    setEmail(e.target.value)
}

const transferValue = (e) => {
    e.preventDefault();
    const user = {
        firstname: firstname,
        lastname: lastname,
        email: email
    }
    const arr1 = []
    arr1.push(...arr, user)
    setArr(arr1)
    setFirstName("")
    setLastName("")
    setEmail("")
}
const deleterow = (index) => {
    const sr=arr.splice(index,1)
    setValue(sr)
}
const UpdateForm=(index)=>{
    setShow(true)
    console.log(index)
    arr.map((data,ind)=>{
if(ind===index){
    setFirstName(data.firstname)
    setLastName(data.lastname)
    setEmail(data.email)
}
    })
}
  return (
    <div>
        
       <form>
                <label>firstname</label>
                <input type="text" name="firstname" value={firstname} onChange={handleFirstName} /><br />
                <label>lastname</label>
                <input type="text" name="lastname" value={lastname} onChange={handleLastName} /><br />
                <label>email</label>
                <input type="text" name="email" value={email} onChange={handleEmail} />
                <br /><br />
                <button onClick={transferValue}>Submit</button>
            </form>
     
    
      <table>
    <thead>
        <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
        </tr>
    </thead>
    <tbody>
        {arr.map((e,index)=>(
            <tr>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
                <td>
                    <button onClick={()=>deleterow(index)}>Delete</button></td>
                    <td>
                <button onClick={()=>UpdateForm(index)}>Update</button>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
                <label>firstname</label>
                <input type="text" name="firstname" value={firstname} onChange={handleFirstName} /><br />
                <label>lastname</label>
                <input type="text" name="lastname" value={lastname} onChange={handleLastName} /><br />
                <label>email</label>
                <input type="text" name="email" value={email} onChange={handleEmail} />
                <br /><br />
                <button onClick={transferValue}>Submit</button>
            </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdateFORMTOTABLE;
