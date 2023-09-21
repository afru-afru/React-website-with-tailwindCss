import React from "react"

const Hero =()=>{
    return(
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="max-h-[500px]  relative">
                {/* overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">The <span className="text-orange-500 ">best</span></h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">foodes<span className="text-orange-500">Delivered</span ></h1>

                </div>
                <img className="w-full max-h-[500px]  object-cover" src="https://images.pexels.com/photos/15141034/pexels-photo-15141034/free-photo-of-bread-food-sandwich-dinner.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
            </div>
        </div>
    )
}

export default Hero