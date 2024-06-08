import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { UserAuth } from '../context/AuthContext.js'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const { createUser } = UserAuth(); 
    const navigate = useNavigate(); 

    const [open, setOpen] = useState(false)
    const [error, setError] = useState('')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bday, setBday] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')

    const handleError = (error) => {
        setError(error)
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        
        setError('')
        setOpen(false);
      };

    const handleSignUp = async(e) => {
        if(password !== confPass){
            handleError("Passwords do not match."); 
            return; 
        }

        try{
            await createUser(email, password, firstName, lastName)
            navigate('/home')
        }
        catch(error){
            if(error.code === 'auth/invalid-email')
            handleError("Invalid email address."); 
        }
    }

    return(
        <div className="sign-in">

            <div className="card">
                <Card sx={{ minWidth: 450, minHeight: 575 }}>
                    <CardContent>
                        <h1>Sign Up</h1>

                        <div className='form-field'>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
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

                            </Box>
                        </div>

                        <div className='form-field'>
                            <TextField
                                required
                                value={bday}
                                id="date"
                                label="Birthday"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => setBday(e.target.value)}
                            />
                        </div>

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
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
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
                            </Box>
                        </div>

                        <p>Already have an account? Sign in <a href='/sign-in'>here</a>!</p>

                    </CardContent>
                    <CardActions>
                        <Button onClick={handleSignUp} variant="contained">Sign Up</Button>
                    </CardActions>
                </Card>
            </div>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert 
                    onClose={handleClose}
                    severity="error"
                >
                    {error}
                </Alert>
            </Snackbar> 
        </div>
    )
}

export default SignUp