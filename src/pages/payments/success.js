import * as React from 'react'; 
import { useNavigate } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import success from '../../images/success.svg'

const Success = () => {
    const navigate = useNavigate(); 

    const handleReturn = () => {
        navigate('/home')
    }

    return(
        <div className='status-page'>
            <div className='status-card'>
                <Card sx={{ minWidth: 500, maxWidth: 500, minHeight: 300, maxHeight: 300}}>
                    <CardContent>
                        <img src={success} alt="checkmark"></img>
                        <h2>PAYMENT WAS SUCCESSFUL!</h2>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handleReturn}>Continue Shopping</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Success