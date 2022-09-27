import React from 'react'
import { useState } from 'react'
import Parent from './Parent'
function Child(props) {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [arr, setArr] = useState([])


    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        setLastName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const formSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email
        }
        let arr1 = []
        arr1.push(...arr, user)
        setArr(arr1)
        setFirstName("")
        setLastName("")
        setEmail("")
        props.data1(arr1);
    }
    return (
        <div className='App'>
            <form onSubmit={formSubmit}>
                <label>firstname</label>
                <input type="text" name="firstname" value={firstname} onChange={changeFirstName} /><br />
                <label>lastname</label>
                <input type="text" name="lastname" value={lastname} onChange={changeLastName} /><br />
                <label>email</label>
                <input type="text" name="email" value={email} onChange={changeEmail} />
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
            <Parent data={arr} />
        </div>
    )
}
export default Child


