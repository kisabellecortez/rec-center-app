import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserAuth } from '../context/AuthContext.js'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const { createUser } = UserAuth(); 
    const navigate = useNavigate(); 

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')

    const handleSignUp = async(e) => {
        if(password !== confPass){
            alert('Passwords do not match.')
            return; 
        }

        await createUser(email, password, firstName, lastName)
        navigate('/home')
    }

    return(
        <div className="sign-in">
            <div className="card">
                <h1>Sign Up</h1>
                <TextField
                    required
                    value={firstName}
                    id="firstName"
                    label="First Name"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <TextField
                    required
                    value={lastName}
                    id="lastName"
                    label="Last Name"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                />

                <TextField
                    required
                    value={email}
                    id="email"
                    label="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    required
                    value={password}
                    id="password"
                    label="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextField
                    required
                    value={confPass}
                    id="confPass"
                    label="Confirm Password"
                    type="password"
                    onChange={(e) => setConfPass(e.target.value)}
                />

                <Button onClick={handleSignUp} variant="contained">Sign In</Button>

                <p>Already have an account? Sign in <a href='/sign-in'>here</a>!</p>
            </div>
        </div>
    )
}

export default SignUp