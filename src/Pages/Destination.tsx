import Navbar from "../components/Navbar";
import Moon from '../assets/destination/image-moon.png';
import Mars from '../assets/destination/image-mars.png';
import Europa from '../assets/destination/image-europa.png';
import Titan from '../assets/destination/image-titan.png';

import { Outlet, useLocation} from 'react-router-dom';

const Destination= () =>{

    
    const location = useLocation();

    let pathAtual = (location.pathname.substring(1));
    let image = Moon;

    pathAtual == 'destination' ? image = Moon : undefined;
    pathAtual == 'destination/mars' ? image = Mars : undefined;
    pathAtual == 'destination/europa' ? image = Europa : undefined;
    pathAtual == 'destination/titan' ? image = Titan : undefined;

    return(
        <div className="destination w-full h-screen">
            <Navbar/>
            <div className="flex lg:flex-row w-4/5 m-auto gap-4 h-[80vh] items-center">
                <div className="w-2/4">
                    <h1 className="uppercase text-white tracking-wide text-3xl lg:mb-5">
                        <span className="text-gray-700">01 </span>
                        Pick your destination
                    </h1>
                    <img src={image} alt="" />
                </div>
                <div className="w-2/4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Destination;