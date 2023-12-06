import React from 'react'
import { AppContext } from './Context/AppContext'
import { useContext } from 'react'

function Footer() {

  const{pages, totalPages, handlePageChange} = useContext(AppContext);

  return (
    <div className=' w-full fixed bg-white py-3 bottom-0 border shadow-inner  '>
     <div className='w-[600px] mx-auto flex justify-between items-center'>
       <div className='flex space-x-2'>
          <div>
             {
              pages > 1
               && 
              <button
               className='py-1 px-2 border  shadow-inner text-xs font-semibold rounded-md'
              onClick={()=>handlePageChange(pages-1)}>
                Previous
                </button>
             }
          </div>

          <div>
             {
              pages < totalPages
                &&
              <button 
              className='py-1 px-2 border  shadow-inner text-xs font-semibold rounded-md'
              onClick={()=>handlePageChange(pages+1)}>
                Next</button>  
             }
          </div>
       </div>

       <div>
         <p className='font-bold text-xs'>Page {pages} of {totalPages}</p>
       </div>
     </div>
    </div>
  )
}

export default Footer