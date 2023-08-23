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

const p = React.memo(PureComponent01)
export default p

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