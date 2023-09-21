import {React,useState} from "react"
import {data} from "../data/data.js"
const Food =()=>{
    const [foods, setFoods]= useState(data)
    // console.log(data)
    // filter type burger/pizza/salad/etc
    const filtertType=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===category;
            }
            )
        );
    };

    // filter by price
    const filterPrice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price===price;
            }
            )
        );
    };
    return(

        <div className="max-w-[1640px] m-auto px-4 py-12  ">
            <h1 className="font-bold text-orange-600 text-4xl text-center">Top Rated Menue Items</h1>

            {/* filter raw */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* filter type */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex justify-between flex-wrap">
                        <button onClick={()=>setFoods(data)} className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                        <button onClick={()=>filtertType('burger')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burger</button>
                        <button onClick={()=>filtertType('pizza')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
                        <button onClick={()=>filtertType('salad')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salad</button>
                        <button onClick={()=>filtertType('chicken')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
                    </div>
                </div>
                {/* filter price */}
                <div>
                    <p className="font-bold text-gray-700">filter price</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button onClick={()=>filterPrice('$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                        <button onClick={()=>filterPrice('$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                        <button onClick={()=>filterPrice('$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                        <button onClick={()=>filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>

                    </div>

                </div>
            </div>
            {/* display foods */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {
                foods.map((item,index)=>(
                    <div key={index} className="border shadow-lg hover:scale-105 rounded-lg duration-300">
                       <img className="w-full h-[200px] object-cover rounded-t-lg" src={item.image} alt={item.name}></img>
                       <div className="flex justify-between px-2 py-4 ">
                        <p className="font-bold ">{item.name}</p>
                        <p><span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span></p>
                       </div>
                        </div>
                )
                )
              }
            </div>
        </div>
    )
}

export default Food