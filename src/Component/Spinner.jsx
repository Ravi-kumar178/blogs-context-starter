import React from 'react'
import "./Spinner.css"

function Spinner() {
  return (
    <div className='w-full h-full '>
         
         <div className='w-full h-full flex flex-col gap-y-6 justify-center items-center '>
           <div className='spinner'>Spinner</div>
          <h1 className='uppercase text-3xl  font-bold  '>LOading</h1>
         </div>
         
    </div>
    
  )
}

export default Spinner