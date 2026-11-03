import React from 'react'

function Counter() {
  return (
    <div style={{height : '100vh'}}  className='container d-flex flex-column justify-content-center align-items-center'>
          <div className='border p-5'>
             <p className='text-center text-light'>10</p>
             <div className='d-flex justify-content-center align-items-center m-5'>
              <button className='btn btn-warning me-2'>Decrement</button>
              <button className='btn btn-danger me-2'>Reset</button>
              <button className='btn btn-success me-2'>Increment</button>
             </div>
             <div className='d-flex justify-content-center align-items-center'>
              <input type="text" placeholder='Enter the amount to be incremented!'  className='form-control me-2 p-3'/>
              <button className='btn btn-primary p-2'>Increment by Amount</button>
          </div>
      </div>
    </div>
  )
}

export default Counter
