import TopNav from '../components/TopNav.js'

import React, { useState, useEffect } from 'react'
import { auth } from '../apis/Firebase.js'
import { useNavigate } from 'react-router-dom'

/* Firebase */
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth'

/* MUI */
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

class User{
    constructor(dispName, email, photo){
        this.dispName = dispName; 
        this.email = email; 
        this.photo = photo; 
    }
}

const promptForCredentials = () => {
    const email = prompt("Email: ")
    const password = prompt("Password: ")
    return { email, password }
}

const Account = () => {
    const user = auth.currentUser;
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('')
    var currUser;
    
    useEffect(() => { 
        console.log(user)

        if(!user){
            navigate('/sign-in')
        }
    })

    if(user){
        user.providerData.forEach((profile) => {
            currUser = new User(profile.displayName, profile.email, profile.photoURL);
        })
    }

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    /* snackbar alert open */
    const handleClickAlert = (message) => {
        setAlertMessage(message) // set message
        setOpenAlert(true);
    };
    
    /* snackbar alert close */
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    /* delete user's account */
    const handleDelete = async() => {

        /* get user credentials */
        const { email, password } = promptForCredentials(); 
        const credential = EmailAuthProvider.credential(email, password)
        
        /* reauthenticate user */
        try{
            await reauthenticateWithCredential(user, credential);
            console.log("Reauthentication successful.")
        }
        catch(error){
            console.log(error)
        } 

        /* delete user */
        user.delete().then(() => {
            navigate('/home') 
            handleClickAlert("Successfully deleted account.")
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <>
            {user ? (
                <div className='page'>
                    <TopNav/>

                    <h1>MY ACCOUNT</h1>
        
                    <Box
                        sx={{
                            display: 'flex',
                            '& > *': {
                            m: 1,
                            },
                        }}
                    >
                        <ButtonGroup orientation="vertical" aria-label="Vertical button group">
                            <Button size='large' key="bookings">BOOKINGS</Button>,
                            <Button size='large' key="membership">MEMBERSHIP</Button>,
                            <Button size='large' key="emailPref">EMAIL PREFERENCES</Button>,
                            <Button size='large' key="payments">PAYMENTS</Button>,
                            <Button size='large' key="cred">CREDENTIALS</Button>,
                            <Button size='large' onClick={handleClick} key="accMan">ACCOUNT MANAGEMENT</Button>,
                        </ButtonGroup>
                    </Box>

                    <Popper id={id} open={open} anchorEl={anchorEl} placement='right-end'>
                        <Card varient="outlined" sx={{ minWidth: 275 }}>
                            <CardContent>
                                <p> FIRST NAME: </p>
                                <p>LAST NAME:   </p>
                                <p>EMAIL: {currUser.email}</p>
                            </CardContent>
                            <CardActions>
                                <Button>CHANGE EMAIL</Button>
                                <Button>CHANGE PASSWORD</Button>
                                <Button variant="contained" color="error" onClick={handleDelete}>DELETE ACCOUNT</Button>
                            </CardActions>
                            </Card>
                    </Popper>

                    <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                        <Alert
                        onClose={handleCloseAlert}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                        >
                        {alertMessage}
                        </Alert>
                    </Snackbar>

                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default Account