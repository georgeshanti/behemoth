import React, { Component } from 'react';
import './style.css';

class FloatingButton extends Component {
    render() {
      return (
        <div style={this.props.style} className="FloatingButton" style={this.props.style} onClick={this.props.onClick}>
          <i className={this.props.icon} style={{verticalAlign: 'middle'}}></i>
        </div>
      );
    }
  }
  
  export default FloatingButton;