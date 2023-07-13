import React, { Component } from 'react'


export class ClassComp extends Component {
    
    render(){
        return(
            <div className=' box2'>
       <h1>This is creaded using class component</h1>
       <p>This is done using external CSS</p>
      <p style={{color:"blue"}}>This is done using inline CSS</p>
            </div>
        )

    }
}


export default ClassComp
