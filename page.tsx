import React from "react";
import Image from "next/image";
<script src="https://cdn.tailwindcss.com"></script>    

export default async function Services() {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    })
 
    return (
      <div>
      <div>
          <h1 className="bg-purple-400" font-bold text-italic>///This Page is Open After Loading///</h1>
      </div>
       <nav className="py-4 md:py-0 bg-yellow-500 text-amber-950 h-24 flex justify-items-end">
        <img src="https://th.bing.com/th?id=OIP.-9kIJQTYp_M63GNj9kBHeAHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"className="w-15 pt-4 px-3 rounded-4xl " alt="Faisal Saeed" srcSet=""/>
        <ul className="px-28 flex space-x-16 justify-end font-semibold">
          <li className="mx-2  cursor-pointer">Bengals</li>
          <li className="mx-2  cursor-pointer">Gold Sets</li>
          <li className="mx-2  cursor-pointer">Clock</li>
          <li className="mx-2  cursor-pointer">Tops</li>
        </ul>
        </nav>
        <main className="bg-orange-700">
        <div className="main bg-emerald-400 py-20 pl-2
         text-blue-700 font-bold " >
            
        <div className=" p-0 text-3xl ">Gold Shop</div>
        <p className="py-3 w-1/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tenetur nostrum quae, minima aspernatur autem et ea? Odit
           eligendi, facilis totam architecto, incidunt molestias 
           sed natus animi quaerat, maxime modi nisi?</p>

        <div className="relative flex items-start justify-end h-40 w-44">
            <img src="https://th.bing.com/th/id/OIP.m87iaQSgVkiOnMVv2DACGQHaFS?w=228&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
             alt=" " className=" absolute top-4 right-0"/>
           </div>
           <div className="relative flex items-start justify-end h-40 w-80">
            <img src="https://th.bing.com/th?id=OIP.v55tuKQZdaNFtMHvUOVirQHaG7&w=258&h=241&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" 
            className="absolute bottom-20 left-80"/>
           </div>
          
            <div className="button"> 
            <button className="bg-lime-800 px-3 py-3 rounded-2xl text-white hover:text-red-200">Buy Now</button>
            <button className="bg-pink-900 px-3 py-3 rounded-2xl text-orange-700 hover:text-pink-300"> Click Here</button>
           </div>
           </div>
           
        </main>
      </div>            
  )
  }
      
