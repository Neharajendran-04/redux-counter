import React, { useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/slices/counterSlice'

function Counter() {

  const {count} = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()
  const inputRef = useRef()

  const handleIncrement = () => {
    const amount = inputRef.current.value
    
    if(amount){
      dispatch(incrementByAmount(+amount))
      inputRef.current.value = ""
    }else{
      alert("Please enter a valid input")
    }
  }


  return (
    <div style={{height : '100vh'}}  className='container d-flex flex-column justify-content-center align-items-center'>
          <div className='border p-5'>
             <p className='text-center text-light'>{count}</p>
             <div className='d-flex justify-content-center align-items-center m-5'>
              <button onClick={() => {dispatch(decrement())}} className='btn btn-warning me-2'>Decrement</button>
              <button onClick={() => {dispatch(reset())}} className='btn btn-danger me-2'>Reset</button>
              <button onClick={() => {dispatch(increment())}} className='btn btn-success me-2'>Increment</button>
             </div>
             <div className='d-flex justify-content-center align-items-center'>
              <input ref={inputRef} type="text" placeholder='Enter the amount to be incremented!'  className='form-control me-2 p-3'/>
              <button onClick={handleIncrement} className='btn btn-primary p-2'>Increment by Amount</button>
          </div>
      </div>
    </div>
  )
}

export default Counter
