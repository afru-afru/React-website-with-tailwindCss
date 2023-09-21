import React from "react"
const HeadLineCards =() => {
 return(
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl relative">
            <div className="absolute w-full h-full rounded-xl bg-black/50 text-white   ">
                <p className="font-bold text-2xl px-2 pt-4 ">Sun's out, BOGOS's Out</p>
                <p className="px-2">Through 8/26</p>
                <button className="border-white bg-white text-black mx-2absolute bottom-4">Order Now</button>
            </div>
            <img className="max-h-[160px]  md:max-h-[200px] rounded-xl w-full  object-cover " src="https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?size=626&ext=jpg&ga=GA1.1.310094712.1695228631&semt=sph" alt=""></img>
        </div>

        <div className="rounded-xl relative">
            <div className="absolute w-full h-full rounded-xl bg-black/50 text-white   ">
                <p className="font-bold text-2xl px-2 pt-4 ">NEW Restuarant</p>
                <p className="px-2">Added Daily</p>
                <button className="border-white bg-white text-black mx-2absolute bottom-4">Order Now</button>
            </div>
            <img className="max-h-[160px]  md:max-h-[200px] rounded-xl w-full object-cover "
            src="https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>

        <div className="rounded-xl relative">
            <div className="absolute w-full h-full rounded-xl bg-black/50 text-white   ">
                <p className="font-bold text-2xl px-2 pt-4 ">We Deliver Desserts Too</p>
                <p className="px-2">Testy Treets</p>
                <button className="border-white bg-white text-black mx-2absolute bottom-4">Order Now</button>
            </div>
            <img className="max-h-[160px]  md:max-h-[200px] rounded-xl w-full object-cover "
            src="https://images.pexels.com/photos/2878740/pexels-photo-2878740.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
    </div>
 )
}
export default HeadLineCards;