import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { UserAuth } from '../context/AuthContext.js'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const { signIn } = UserAuth()
    const navigate = useNavigate(); 

    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleError = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleSignIn = async(e) => {
        try{
            await signIn(email, password)
            navigate('/home')
        }
        catch(userCredential){
            handleError(); 
        }
    }

    return(
        <div className="sign-in">
           
            <Card sx={{ minWidth: 300, minHeight: 375 }}>
                <CardContent>
                    <h1>Sign In</h1>
                    <div className='form-field'>
                        <TextField
                            required
                            value={email}
                            id="email"
                            label="Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='form-field'>
                        <TextField
                            required
                            value={password}
                            id="password"
                            label="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <p>Don't have an account? Sign up <a href='/sign-up'>here</a>!</p>
                </CardContent>
                <CardActions>
                    <Button onClick={handleSignIn} variant="contained">Sign In</Button>

                </CardActions>
            </Card>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert 
                    onClose={handleClose}
                    severity="error"
                >
                    Invalid email or password.
                </Alert>
            </Snackbar> 
        </div>
    )
}

export default SignIn