import React from 'react'

function PureComponent01({value}) {

    console.log("render PureComponent01")
  return (
    <>
    <h2>PureComponent01</h2>
    value : {value}
    </>
  )
}

PureComponent01 = React.memo(PureComponent01)
export  {PureComponent01}

// const PureComponent01 = React.memo(function PureComponent01({value}) {

//     console.log("render PureComponent01")
//   return (
//     <>
//     <h2>PureComponent01</h2>
//     value : {value}
//     </>
//   )
// })

// export default PureComponent01




function PureComponent02({onClick}) {
    console.log("render PureComponent02")
  return (
    <>
    <h2>PureComponent02</h2>
    <button onClick={onClick}>Click </button>
    </>
  )
}

PureComponent02 = React.memo(PureComponent02)
export  {PureComponent02}