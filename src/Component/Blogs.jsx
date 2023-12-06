import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'
import Spinner from './Spinner';

function Blogs() {

   const {posts,loading} = useContext(AppContext);

  return (
    <div className='w-full'>

      <div className='w-[600px] mx-auto flex flex-col space-y-8 mt-[100px] mb-[80px]'>
          {
            loading?
            (<Spinner/>)
             :
            (
              posts.length === 0 ? 
               (
                <div>
                  <p className=''>No Post Found</p>
                </div>
               )
              :
              (
                posts.map((post) => (
                  <div key={post.id}>
                    <h1 className='font-bold text-xl'>{post.title}</h1>
                    <p className='my-1 text-sm'>By <span className="italic">{post.author}</span> on <span className='font-bold underline'>{post.category}</span></p>

                    <p className='mb-3'>posted on {post.date}</p>

                    <p className='mb-2 mt-5'>{post.content}</p>

                    <div className='flex flex-row space-x-2 font-bold text-blue-700 underline text-xs'>
                      {
                        post.tags.map((tag,index)=>(
                          <div key={index} >#{tag}</div>
                        ))
                      }
                    </div>
                  </div>
                ))
              )
            )
          }
      </div>

    </div>
  )
}

export default Blogs