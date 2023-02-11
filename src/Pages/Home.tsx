import NavList from "../components/Navbar";
import Navbar from "../components/Navbar";

const Home = () =>{
    return(
        <div className="home">
            <Navbar/>
            <div className="flex lg:flex-row w-4/5 m-auto pt-6 h-[87vh]">
                <div className="w-2/4 flex items-start flex-col justify-center gap-5">
                    <span className="uppercase text-white w-full">So, you want to travel to</span>
                    <h1 className="uppercase lg:text-8xl text-white w-full">Space</h1>
                    <span className="text-white w-[75%] justify-start text-justify opacity-80">Let’s face it; if you want to go to space, 
                        you might as well genuinely go to outer space 
                        and not hover kind of on the edge of it. 
                        Well sit back, and relax because we’ll give 
                        you a truly out of this world experience!
                    </span>
                </div>
                <div className="w-2/4 flex justify-center items-center">
                    <button className="w-52 h-52 uppercase bg-white rounded-full text-2xl">Explore</button>
                </div>
            </div>
        </div>
    )
}

export default Home;