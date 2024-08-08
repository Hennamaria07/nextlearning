'use client'
import axios from 'axios';
import React, {useState} from 'react'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // let response = await fetch('http://localhost:3000/api/signup', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({name, email, password})
            // });
            // response = await response.json();
            let response = await axios.post('http://localhost:3000/api/signup', {name, email, password});
            console.log(response)
            if(response?.data?.success) {
                alert(response?.data?.message);
                setName('');
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.log(error.response.data.message || error.message || error);
        }
    }
  return (
    <div
    className="grid place-content-center w-screen h-screen">
        <form action=""
        className="w-1/2 grid gap-5"
         onSubmit={handleSubmit}>
            <div className="grid gap-2">
                <label>Name:</label>
                <input 
                type="text" 
                name="name"
                value={name}
                className="text-black"
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
                <label>Email:</label>
                <input 
                type="email" 
                name="email"
                value={email}
                className="text-black"
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
                <label>Password:</label>
                <input 
                type="password" 
                name="password"
                value={password}
                className="text-black"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button
            type="submit"
            className="bg-slate-600">Register</button>
        </form>
    </div>
  )
}

export default Signup