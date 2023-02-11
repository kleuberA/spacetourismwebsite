import { NavLink, useLocation } from "react-router-dom"
import data from '../data.json';

const Destinations = () =>{

    let activeStyle = {
        display: 'flex',
        alignItems: 'center',
        height: 'inherit',
        borderBottomWidth: '2px',
        borderColor: 'white',
    };
    let dataElements = data;
    const location = useLocation();
    let pathAtual = (location.pathname.substring(1));
    let planet = 0;

    pathAtual == 'destination/' ? planet = 0: undefined;
    pathAtual == 'destination/mars' ? planet = 1: undefined;
    pathAtual == 'destination/europa' ? planet = 2: undefined;
    pathAtual == 'destination/titan' ? planet = 3: undefined;

    return(
        <div className="flex lg:flex-col ">
            <ul className="flex lg:flex-row text-white gap-6 items-center h-20 justify-between lg:w-3/4">
                <NavLink
                    to="/destination/"
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    Moon
                </NavLink>
                <NavLink
                    to="/destination/mars"
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    Mars
                </NavLink>
                <NavLink
                    to="/destination/europa"
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    Europa
                </NavLink>
                <NavLink
                    to="/destination/titan"
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    Titan
                </NavLink>
            </ul>
            <div className="flex lg:flex-col lg:pt-3">
                <h1 className="text-white lg:text-7xl uppercase">{data.destinations[planet].name}</h1>
                <span className="text-white opacity-80 lg:text-base lg:w-3/4 lg:mt-4 lg:mb-4">{data.destinations[planet].description}</span>
                <hr className="lg:w-3/4 lg:mt-6 lg:mb-6 opacity-80" />
                <div className="flex lg:flex-row lg:justify-start lg:pt-6 lg:gap-14">
                    <div className="flex lg:flex-col">
                        <h6 className="uppercase lg:text-sm text-white opacity-80">avg. distance</h6>
                        <span className="uppercase lg:text-xl text-white">{data.destinations[planet].distance}</span>
                    </div>
                    <div className="flex lg:flex-col">
                        <h6 className="uppercase lg:text-sm text-white opacity-80">est. travel time</h6>
                        <span className="uppercase lg:text-xl text-white">{data.destinations[planet].travel}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations;