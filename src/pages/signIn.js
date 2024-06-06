import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserAuth } from '../context/AuthContext.js'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const { signIn } = UserAuth()
    const navigate = useNavigate(); 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async(e) => {
        try{
            await signIn(email, password)
            navigate('/home')
        }
        catch(userCredential){
            alert('Invalid email or password.')
        }
    }

    return(
        <div className="sign-in">
            <div className="card">
                <h1>Sign In</h1>
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

                <Button onClick={handleSignIn} variant="contained">Sign In</Button>

                <p>Don't have an account? Sign up <a href='/sign-up'>here</a>!</p>
            </div>
        </div>
    )
}

export default SignIn