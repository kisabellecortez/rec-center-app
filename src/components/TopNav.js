import logo from '../images/logo.png'
import user from '../images/user-icon.svg'
import Sidebar from '../components/Sidebar.js'

export default function TopNav(){
    return(
        <div className="nav">
            <Sidebar/>

            <div className='logo-div'>
                <img className='logo' src={logo} alt='Scarbs Rec logo'></img>
            </div>
            
            <div className='user-div'>
                <a href='/account'>
                    <img className='user' src={user} alt='User icon'></img>
                </a>
            </div>
        </div>
    )
}