import React from "react";
<script src="https://cdn.tailwindcss.com"></script> 

export default  async function Program(){
    await new Promise((resolve) => {
    setTimeout(resolve, 3000);
             })
         
            return(
              <div>
              <div>
                  <h1 className="bg-purple-400" font-bold text-italic>///This Page is Open After Loading///</h1>
              </div>
               
          
              <main className="bg-orange-700">
                <div className="main bg-emerald-400 py-20 pl-2
                 text-blue-700 font-bold " >
                
                <div className="flex h-40 w-96">
                    <img src="https://th.bing.com/th?id=OIP.AkFFOBgsVNSfrQqAI1KjtgHaGU&w=270&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" className="w-96" alt="Heavy Bikes" />
                   </div>
                   
                <div className="text-3xl">Heavy Bikes</div>
                
                <p className="py-3 w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Tenetur nostrum quae, minima aspernatur autem et ea? Odit
                   eligendi, facilis totam architecto, incidunt molestias 
                   sed natus animi quaerat, maxime modi nisi?</p>
                   <div className="button"> 
                    <button className="bg-purple-950 px-3 py-3 rounded-2xl text-white hover:text-red-200">Buy Now</button>
                    <button className="bg-red-300 px-3 py-3 rounded-2xl text-orange-700 hover:text-yellow-400"> Click Here</button>
                    
                   </div>
                   </div>
                   
                </main>
              </div>            
          )
        }
              
        