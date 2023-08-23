import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function UseRef(props,ref) {
    const inputRef = useRef(null)
  
    useImperativeHandle(ref,()=>({
        theValue:()=>inputRef.current.value,
        setFocus:()=>inputRef.current.focus()

    }))
  
    return (
    <>
        <h2>UseRefComponent</h2>
        <input type="text" defaultValue="useref value" ref={inputRef}/>
    </>
  )
}
UseRef = forwardRef(UseRef)
export default UseRef