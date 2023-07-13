import React ,{useState} from 'react'
import FuncComp from './components/FuncComp'
import ClassComp from './components/ClassComp'
function App() {
  const [fState,setFState]=useState(false)
  const [value,setValue]=useState(false)
  return (
    <div>
      <>
      <h1 className='heading'>Styling using functional and class components</h1>
      <button onClick={()=>setFState(!fState)}>To see styling in functional component</button>
      <button onClick={()=>setValue(!value)} className='button2'>To see styling in class component</button>
       <div className='flexbox'>
       { fState? <FuncComp/>:" "}
       {value && <ClassComp/>}
       </div>
      
      </>
    </div>
  )
}

export default App


