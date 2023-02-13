
import Vehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import Capsule from '../assets/technology/image-space-capsule-portrait.jpg';
import Spaceport from '../assets/technology/image-spaceport-portrait.jpg';
import { useState } from "react";
import Navbar from "../components/Navbar";
import data from '../data.json';


const Technology = () =>{

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
        ? { transform: `translateX(-${selected * 1146.8}px)` }
        : {};

    const renderIndicator = []
    for(let i=0; i < 3; i++) {
        renderIndicator.push(
            <li data-value={i} key={i} className={selected == i ? 'active' : ''}>{i}</li>
        )
    }
    let imageUrl: string | undefined;
    return(
        <div className="technology w-full h-screen">
            <Navbar/>
            <h1 className="uppercase w-4/5 m-auto text-white tracking-wide lg:text-3xl lg:mb-5">
                <span className="text-gray-700">03 </span>
                Space launch 101
            </h1>
            <div className="slideTechnology gap-8">
                <ul onClick={handleClick} className="indicatorsTechnology flex flex-col gap-4 justify-center w-[50px]">
                    {renderIndicator}
                </ul>
                <div className="slide-items" style={style}>
                {dataElements.technology.map((element, key) =>{
                        key == 0 ? imageUrl = Vehicle : undefined;
                        key == 1 ? imageUrl = Capsule : undefined;
                        key == 2 ? imageUrl = Spaceport : undefined;
                        return(
                            <div className="item" key={key}>
                                <div className="w-2/4 flex lg:flex-col lg:gap-6">
                                    <h1 className="lg:text-6xl text-white">{element.name}</h1>
                                    <h3 className="lg:text-xl text-gray-400 font-light">{element.description}</h3>
                                </div>
                                <div className="w-2/4">
                                    <img className="h-[55vh]" src={imageUrl} alt="" />
                                </div>
                            </div>
                        )
                    })}
                    <div></div>
                </div>

            </div>
        </div>
    )
}

export default Technology;