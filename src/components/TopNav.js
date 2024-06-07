import logo from '../images/logo.png'
import user from '../images/user-icon.svg'
import Sidebar from '../components/Sidebar.js'

export default function TopNav(){
    return(
        <div className="nav">
            <Sidebar/>
            <img className='logo' src={logo}></img>
            <img className='user' src={user}></img>
        </div>
    )
}