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

            <div className='membership-card-section'>

                <div className='membership-card'>
                    <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 275, maxHeight: 275 }}>
                        <CardContent>
                            <h2>YOUTH</h2>
                            <h3>FREE</h3>
                            <p>Must be below 18 (youth 12 or under require parental guidance when using our facilities)</p>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="success">
                            GET
                            </Button>
                        </CardActions>
                    </Card>
                </div>

                <div className='membership-card'>
                    <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 275, maxHeight: 275 }}>
                        <CardContent>
                            <h2>STUDENT</h2>

                            <div className='price'>
                                <h3>$25.99</h3> 
                                <h4>/month</h4>
                            </div>

                            <p>Must be 18+ with a valid student ID</p>
                        </CardContent>
                        <CardActions>
                                <Button variant="contained" color="success">
                                BUY
                                </Button>
                        </CardActions>
                    </Card>
                </div>

                <div className='membership-card'>
                    <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 275, maxHeight: 275 }}>
                        <CardContent>
                            <h2>ADULT</h2>

                            <div className='price'>
                                <h3>$30.99</h3> 
                                <h4>/month</h4>
                            </div>

                            <p>Must be 18+</p>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="success">
                            BUY
                            </Button>
                        </CardActions>
                    </Card>
                </div>

                <div className='membership-card'>
                    <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 275, maxHeight: 275 }}>
                        <CardContent>
                            <h2>SENIOR</h2>

                            <div className='price'>
                                <h3>$20.99</h3> 
                                <h4>/month</h4>
                            </div>

                            <p>Must 65+ years young</p>
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