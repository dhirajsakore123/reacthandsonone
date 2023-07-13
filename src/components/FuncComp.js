import React from 'react'

const FuncComp = () => {
const style1={
  color:"blue",
  backgrounColor:"red"
}

  return (
    <div className=' box1'>
      <h1>This is created using functional component</h1>
      <p>This is done using external CSS</p>
      <p style={style1}>This is done using inline CSS</p>
    </div>
  )
}

export default FuncComp
