import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'

function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment by 2"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default App
