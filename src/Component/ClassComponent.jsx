import { Component } from 'react'
import React from 'react'


class ClassComponent extends Component  {
  render(){
  return (
  <div style={{float:'right'}} id='rightDiv'>
    <div className='functionalDiv'>
        <h1 className="headingText">This is created using class component</h1>
        <h2 className="headingText2">This is done using external css</h2>
        <h3 className="headingText3">This is done using inline css</h3>
    </div>
  </div>
  )
}
}

export default ClassComponent