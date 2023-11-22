import './Navbar.css'
import {BiSearchAlt2} from 'react-icons/bi'
import {NavLink, Outlet} from 'react-router-dom'

const Navbar = () => {
    return (<>
    <header>
        <nav>
            <div className="logo">
                <a href="#"><img src="" alt="" /></a>
            <ul>
                <li><NavLink to={'/'} href="">HOME</NavLink></li>
                <li><a href="">DISCOVER</a></li>
                <li><a href="">SALE</a></li>
                <li><a href="">NEWJEANS</a></li>
            </ul>
            </div>
            <div className='search'>
                
            <form action="">
            <span className='icon'><i><BiSearchAlt2/></i></span>
                <input type="text" />
            </form>

            </div>
        </nav>
            {/* <Outlet /> */}
    </header>
        
    </>)
}
export default Navbar