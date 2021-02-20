import React, { Component } from 'react'
export default class Button extends React.Component {
  render(){
    let { title, action } = this.props
    return(
      <button onClick = { action }>{ title }</button>
    )}
}