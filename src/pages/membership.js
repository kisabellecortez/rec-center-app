import TopNav from '../components/TopNav.js'
import check from '../images/check-icon.svg'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const handleYouthMem = async() => {
    
}

const Membership = () => {
    return(
        <div className="membership">
            <TopNav/>

            <h1>Become a member today!</h1>

            <div className='perks-card'>
                <div>
                    <img src={check} alt="check mark"></img>
                    <p>ACCESS TO ALL FACILITIES AND EQUIPMENT</p>
                </div>

                <div>
                    <img src={check} alt="check mark"></img>
                    <p>FREE PROGRAMS AND LESSONS</p>
                </div>
                
                <div>
                    <img src={check} alt="check mark"></img>
                    <p>PARTICIPATE IN PRIVATE SOCIAL EVENTS</p>
                </div>
            </div>  

            <div className='membership-card'>
                <div>
                    <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 250, maxHeight: 250 }}>
                        <CardContent>
                            <h2>YOUTH</h2>
                            <h4>Must be below 18 (youth 12 or under require parental guidance when using our facilities)</h4>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="success">
                            GET
                            </Button>
                        </CardActions>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 250, maxHeight: 250 }}>
                        <CardContent>
                            <h2>STUDENT</h2>
                            <h4>Must be 18+ with a valid student ID</h4>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="success">
                            BUY
                            </Button>
                        </CardActions>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 250, maxHeight: 250 }}>
                        <CardContent>
                            <h2>ADULT</h2>
                            <h4>Must be 18+</h4>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="success">
                            BUY
                            </Button>
                        </CardActions>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 250, maxHeight: 250 }}>
                        <CardContent>
                            <h2>SENIOR</h2>
                            <h4>Must 65+ years young</h4>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="success">
                            BUY
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Membership