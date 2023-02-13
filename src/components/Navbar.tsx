import Logo from '../assets/shared/logo.svg';
import { Link, NavLink } from "react-router-dom";
import IconMenu from '../assets/shared/icon-hamburger.svg';
import IconClose from '../assets/shared/icon-close.svg';

const Navbar = () =>{
    let activeStyle = {
        display: 'flex',
        alignItems: 'center',
        height: 'inherit',
        borderBottomWidth: '2px',
        borderColor: 'white',
    };
    let activeStyleResponsive = {
        display: 'flex',
        alignItems: 'center',
        height: 'inherit',
        background: 'white',
        color: 'black',
        padding: '10px 15px',
        borderRadius: '5px'
    };
    const handleMenu = () =>{
        let menu = document.querySelector('#menu');
        menu?.classList.remove('hidden');
        menu?.classList.remove('translate-x-[300%]');
    }
    const handleClose = () =>{
        let menu = document.querySelector('#menu');
        menu?.classList.add('hidden');
        menu?.classList.add('translate-x-[300%]');
    }

    return(
        <div className='z-10'>
            <div className="flex m-auto w-4/5 justify-between pt-4">
                <div className='w-10  flex items-center'>
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <div className='w-2/4 relative flex items-center h-20 z-10'>
                    <hr className='absolute lg:h-[1px] lg:w-[95%] lg:-right-6 opacity-30 md:hidden lg:block'/>
                </div>
                <div className='lg:hidden md:flex sm:flex flex flex-row justify-center items-center' onClick={handleMenu}>
                    <img src={IconMenu} alt="" />
                </div>
                <div className="itemsNavbar w-2/4 px-14 backdrop-blur-md md:hidden sm:hidden lg:block hidden">
                    <ul className="flex lg:flex-row text-white gap-6 items-center h-20 justify-between">
                        <NavLink
                            to="/"
                            style={({ isActive }) => isActive ? activeStyle : undefined}>
                            00 Home
                        </NavLink>
                        <NavLink
                            to="/destination"
                            style={({ isActive }) => isActive ? activeStyle : undefined}>
                            01 Destination
                        </NavLink>
                        <hr />
                        <NavLink
                            to="/crew"
                            style={({ isActive }) => isActive ? activeStyle : undefined}>
                            02 Crew
                        </NavLink>
                        <NavLink
                            to="/technology"
                            style={({ isActive }) => isActive ? activeStyle : undefined}>
                            03 Technology
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div id="menu" className='bg-[#ffffff19] backdrop-blur-lg w-[70%] h-[80vh] hidden translate-x-[300%] z-10 lg:hidden float-right absolute right-0 top-[15%]'>
                    <ul className="flex flex-col lg:flex-row text-white gap-6 items-center h-20 justify-between">
                        <div className='flex w-full justify-end pr-3 pt-3 cursor-pointer' onClick={handleClose}>
                            <img src={IconClose} alt="" />
                        </div>
                        <NavLink
                            to="/"
                            style={({ isActive }) => isActive ? activeStyleResponsive : undefined}>
                            00 Home
                        </NavLink>
                        <hr className='bg-white w-[60%] h-[2px]' />
                        <NavLink
                            to="/destination"
                            style={({ isActive }) => isActive ? activeStyleResponsive : undefined}>
                            01 Destination
                        </NavLink>
                        <hr className='bg-white w-[60%] h-[2px]' />
                        <NavLink
                            to="/crew"
                            style={({ isActive }) => isActive ? activeStyleResponsive : undefined}>
                            02 Crew
                        </NavLink>
                        <hr className='bg-white w-[60%] h-[2px]' />
                        <NavLink
                            to="/technology"
                            style={({ isActive }) => isActive ? activeStyleResponsive : undefined}>
                            03 Technology
                        </NavLink>
                    </ul>
                </div>
        </div>
    )
}
export default Navbar;