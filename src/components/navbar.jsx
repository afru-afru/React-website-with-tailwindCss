import React, {useState} from "react";
import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag } from "react-icons/ai";
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb";
import {FaUserFriends,FaWallet} from 'react-icons/fa';
import {MdFavorite,MdHelp} from "react-icons/md"
const Navbar = () => {
const [nav,setNav] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
      <div onClick={()=>setNav(!nav)} className="cursor-pointer">
        <AiOutlineMenu size={30}></AiOutlineMenu>
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
        Best<span className="font-bold">eats</span>
      </h1>
      <div className="hidden lg:flex items-center bg-grey-200 rounded-full p-1 text-[14px]">
        <p className="bg-black text-white rounded-full">delivery</p>
        <p className="p-2">pickup</p>
      </div>
    </div>
    {/* search */}
    <div className="bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
      <AiOutlineSearch size={25}></AiOutlineSearch>
      <input type='text' placeholder="search food" className="bg-transparent p-2 focus:outline-none  w-full"></input>
    </div>
    {/* cart button*/}

      <button className="bg-black text-white hidden md:flex  items-center py-2 rounded-full">
     <BsFillCartFill size={20} className="mr-2"></BsFillCartFill>Cart
     </button>

     {/* mobile menu */}
     {nav?<div className="bg-black/80 fixed w-full h-screen top-0 z-10">
    </div>: ''}
    {/* side drawer manu */}
    <div  className={nav?"fixed left-0 top-0  w-[300px] bg-white z-10 h-screen duration-300 ":"fixed  top-0 left-[-100%] w-[300px] bg-white z-10 h-screen duration-300 "}>

     <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer"></AiOutlineClose>
     <h1 className="text-2xl p-4">Best<span className="font-bold">Eats</span></h1>
     <nav>
      <ui className="dlex flex-col p-4 text-gray-200">
        <li className="flex text-xl py-4 text-black"><TbTruckDelivery size={30} className="mr-2 fill-blue-500"/>orders</li>
        <li className="flex text-xl py-4 text-black" >< MdFavorite size={30} className="mr-2 fill-red-600"/>Favourites</li>
        <li className="flex text-xl py-4 text-black"><FaWallet size={30} className="mr-2 fill-slate-500"/>Wallet</li>
        <li className="flex text-xl py-4 text-black"><MdHelp size={30} className="mr-2 fill-green-400"/>Help</li>
        <li className="flex text-xl py-4 text-black"><AiFillTag size={30} className="mr-2 fill-yellow-400"/>promotion</li>
        <li className="flex text-xl py-4 text-black"><BsFillSaveFill size={30} className="mr-2 fill-fuchsia-600"/>Best one</li>
        <li className="flex text-xl py-4 text-black"><FaUserFriends size={30} className="mr-2 fill-sky-300 "/>Invite Freinds</li>

      </ui>
     </nav>
    </div>
    </div>
  );
};

export default Navbar;
