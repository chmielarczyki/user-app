import React, { useState } from 'react';
import './Users.css';

import UsersList from './UsersList';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [inputName, setInputName] = useState('');
    const [inputLastName, setInputLastName] = useState('');

    const handleChange = (event) => {

        setInputName(event.target.value);
    };

    const addUser = (event) => {
        event.preventDefault();

        let addedNewUser = {
            id: Date.now(),
            name: inputName,
            lastName: inputLastName
        }

        console.log(addedNewUser);

        setUsers((prevUsers) => {
            console.log(prevUsers.concat(addedNewUser));
            return prevUsers.concat(addedNewUser)
            
        })

        setInputName('');
        setInputLastName('');
    }

    const lastNameChange = (event) => {
        setInputLastName(event.target.value);
    }

    const removeUser = (userID) => {
        setUsers((prevUsers) => {
            return(
                prevUsers.filter((user) => {return(user.id !== userID)})
            );
        })
    }

    return (
        <div className='users-main'>
            <h1>User's List</h1>
            <form onSubmit={addUser}>
                <input onChange={handleChange} value={inputName} type='text' placeholder='Enter Name' />
                <input onChange={lastNameChange} value={inputLastName} type='text' placeholder='Enter Lastname' />
                <button type='submit'>Add user</button>
            </form>
            <UsersList usersList={users} lastNameList={users} removeUserMethod={removeUser} />
        </div>
    );
}

export default Users; 
