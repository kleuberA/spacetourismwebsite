import Logo from '../assets/shared/logo.svg';

const Navbar = () =>{
    return(
        <div>
            <div className="flex m-auto w-4/5 justify-between pt-4">
                <div className='w-10 flex items-center'>
                    <img src={Logo} alt="" />
                </div>
                <div className='w-2/4 relative flex items-center h-20 z-10'>
                    <hr className='absolute lg:h-[1px] lg:w-[95%] lg:-right-6 opacity-30'/>
                </div>
                <div className="itemsNavbar w-2/4 px-14 backdrop-blur-md">
                    <ul className="flex lg:flex-row text-white gap-6 items-center h-20 justify-between">
                        <li className='flex items-center h-[inherit] border-b-2 border-white'>00 Home</li>
                        <li>01 Destination</li>
                        <li>02 Crew</li>
                        <li>03 Technology</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;