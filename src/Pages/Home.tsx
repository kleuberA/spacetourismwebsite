import Navbar from "../components/Navbar";

const Home = () =>{
    return(
        <div className="home h-screen w-full">
            <Navbar/>
            <div className="flex flex-col lg:flex-row w-4/5 m-auto lg:pt-6 lg:h-[87vh] lg:gap-0 gap-6 z-0">
                <div className="lg:w-2/4 flex items-start lg:text-start flex-col justify-center lg:gap-5 gap-6">
                    <span className="uppercase text-white text-center w-full lg:text-start text-xl">So, you want to travel to</span>
                    <h1 className="uppercase text-6xl text-center lg:text-start lg:text-8xl text-white sm:w-4/5 md:w-full w-full md:text-center md:text-8xl lg:w-full">Space</h1>
                    <span className="text-white lg:w-[75%] justify-start  text-center lg:text-justify opacity-80">Let’s face it; if you want to go to space, 
                        you might as well genuinely go to outer space 
                        and not hover kind of on the edge of it. 
                        Well sit back, and relax because we’ll give 
                        you a truly out of this world experience!
                    </span>
                </div>
                <div className="lg:w-2/4 flex justify-center items-center">
                    <button className="w-52 h-52 uppercase bg-white rounded-full text-2xl">Explore</button>
                </div>
            </div>
        </div>
    )
}

export default Home;