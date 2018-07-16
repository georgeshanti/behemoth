import React, { Component } from 'react'
import FloatingButton from 'components/floating-button'
import Swipeable from 'react-swipeable'
import './style.css';

class NavButton extends Component {
    constructor(props){
      super(props);
      this.state = {
        expanded: false,
        menu: [
          {symbol: "fas fa-home"},
          {symbol: "fas fa-user-alt"},
          {symbol: "fas fa-gamepad"},
          {symbol: "fas fa-calendar-alt"},
          {symbol: "fas fa-basketball-ball"},
          {symbol: "fas fa-wrench"},
        ],
        radius: 80
      }
    }

    expand(){
      console.log(this.state.expanded)
      if(this.state.expanded)
        this.setState({expanded: false})
      else
        this.setState({expanded: true})
    }

    render() {
      var menu = this.state.menu.map((item, i)=>{
        if(!this.state.expanded)
          var style = {transform: "translate(0px, 0px)"}
        else{
          var angle = ( (i*2*3.14159)/6 ) - (3.14159/2)
          var xOffset = this.state.radius * Math.cos(angle)
          var yOffset = this.state.radius * Math.sin(angle)
          var style = {transform: "translate(" + xOffset + "px, " + yOffset + "px)"}
        }
        return <FloatingButton key={i} style={style} expanded={this.state.expanded} icon={item.symbol}/>
      })
      var menuStyle = this.state.expanded?{transform: "translate(-50%, -150px)"}:{transform: "translate(-50%, 0px)"}
      var menuSymbol = this.state.expanded?"fas fa-times":"fas fa-bars"
      return (
        <div style={menuStyle} className="NavButton">
          {menu}
          <Swipeable onSwipedUp={this.expand.bind(this)} onSwipedDown={this.expand.bind(this)}>
            <FloatingButton expanded={this.state.expanded} icon={menuSymbol} onClick={this.expand.bind(this)}/>
          </Swipeable>
        </div>
      );
    }
  }
  
  export default NavButton;