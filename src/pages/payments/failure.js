import * as React from 'react'; 
import { useNavigate } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import failure from '../../images/failure.svg'

const Failure = () => {
    const navigate = useNavigate(); 

    const handleReturn = () => {
        navigate('/home')
    }

    return(
        <div className='status-page'>
            <div className='status-card'>
                <Card sx={{ minWidth: 500, maxWidth: 500, minHeight: 300, maxHeight: 300}}>
                    <CardContent>
                        <img src={failure} alt="frowny face"></img>
                        <h2>PAYMENT WAS UNSUCCESSFUL</h2>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handleReturn}>Return to Home Page</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Failure 