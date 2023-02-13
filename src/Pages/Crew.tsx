import { useState } from "react";
import Navbar from "../components/Navbar";
import data from '../data.json';
import Anousheh from '../assets/crew/image-anousheh-ansari.png';
import Douglas from '../assets/crew/image-douglas-hurley.png';
import Mark from '../assets/crew/image-mark-shuttleworth.png';
import Victor from '../assets/crew/image-victor-glover.png';

const Crew = () =>{

    let [select, setSelect] = useState({selected: 0});

    let dataElements = data;
    
    const handleClick = (e: any) => {
        let value = e.target.getAttribute('data-value');
        if (value !== null) {
            setSelect({selected: value});
        }
    };

    const { selected } = select;
    const style = select.selected >= 1
        ? { transform: `translateX(-${selected * 1228.8}px)` }
        : {};

    const renderIndicator = []
    for(let i=0; i < 4; i++) {
        renderIndicator.push(
            <li data-value={i} key={i} className={selected == i ? 'active' : ''}></li>
        )
    }
    let imageUrl: string | undefined;

    return(

        
        <div className="crew w-full h-screen">
            <Navbar/>
            <h1 className="uppercase w-4/5 m-auto text-white tracking-wide lg:text-3xl lg:mb-5">
                <span className="text-gray-700">02 </span>
                Meet your crew
            </h1>
            <div className="slider">
                <div className="slide-items" style={style}>
                    {dataElements.crew.map((element, key) =>{
                        key == 0 ? imageUrl = Douglas : undefined;
                        key == 1 ? imageUrl = Mark : undefined;
                        key == 2 ? imageUrl = Victor : undefined;
                        key == 3 ? imageUrl = Anousheh : undefined;
                        return(
                            <div className="item" key={key}>
                                <div className="w-2/4 flex lg:flex-col lg:gap-6">
                                    <h3 className="lg:text-4xl text-gray-400 font-light">{element.role}</h3>
                                    <h1 className="lg:text-6xl text-white">{element.name}</h1>
                                    <span className="text-gray-500 w-3/4 font-normal">{element.bio}</span>
                                </div>
                                <div className="w-2/4">
                                    <img className="h-[75vh]" src={imageUrl} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <ul onClick={handleClick} className="indicators">
                    {renderIndicator}
                </ul>
            </div>
        </div>
    )
}

export default Crew;