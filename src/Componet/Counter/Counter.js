import React, { useReducer, useState } from 'react';

const Counter = () => {
    const [counter,setCounter]=useState(0)
    const initialState=0;
    const reducer=(state,action)=>{
        if(action.type === "Increment"){
            return state +1
        }
        else if( action.type === "Drcrement "){
            return state -1

        }

    }
    const [state,dispatch]=useReducer(reducer,initialState)

    return (
      
            <div  className='flex justify-center items-center h-96'>
            <div className='w-80 h-40 border border-slate-600'>

              <p className='text-3xl pt-5 ml-40'>{counter}</p>
               <div className='mt-10  ml-5 '>
               <button className='btn btn-secondary' onClick={()=>setCounter(counter+1)}>Increment </button>
               <button className='btn btn-secondary ml-20' onClick={()=>setCounter(counter-1)}>Decrement </button>
               </div>
                

             </div>

            </div>
           
            
        
    );
};

export default Counter;