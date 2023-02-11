import Logo from '../assets/shared/logo.svg';
import { Link, NavLink } from "react-router-dom";

const Navbar = () =>{
    let activeStyle = {
        display: 'flex',
        alignItems: 'center',
        height: 'inherit',
        borderBottomWidth: '2px',
        borderColor: 'white',
    };

    return(
        <div>
            <div className="flex m-auto w-4/5 justify-between pt-4">
                <div className='w-10  flex items-center'>
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <div className='w-2/4 relative flex items-center h-20 z-10'>
                    <hr className='absolute lg:h-[1px] lg:w-[95%] lg:-right-6 opacity-30'/>
                </div>
                <div className="itemsNavbar w-2/4 px-14 backdrop-blur-md">
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
        </div>
    )
}


// function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.


// return (
//     <nav>
//         <ul>
//             <li>

//             </li>
//             <li>
//             <NavLink
//                 to="/destination"
//                 className={({ isActive }) => isActive ? activeClassName : undefined}
//             >
//                 Destination
//             </NavLink>
//             </li> 
//         </ul>
//     </nav>
// );
// }
// export default NavList
export default Navbar;