import React, { useState } from 'react';

const UserForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Created user ${username}`)
        setUsername("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text"
                   id="username"
                   placeholder="username" 
                   value={username}    
                   onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input type="email"
                   id="email"
                   placeholder="email" 
                   value={email}    
                   onChange={handleChange} />
            <button>Add me to list!</button>
        </form>
    )
};

export default UserForm;