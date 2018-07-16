import React, { Component } from 'react'
import FloatingButton from 'components/floating-button'
import Swipeable from 'react-swipeable'
import styles from './style.module.css';

class NavButton extends Component {
    constructor(props){
      super(props);
      var radius = 80;
      this.menu = [
        {symbol: "fas fa-home"},
        {symbol: "fas fa-user-alt"},
        {symbol: "fas fa-gamepad"},
        {symbol: "fas fa-calendar-alt"},
        {symbol: "fas fa-basketball-ball"},
        {symbol: "fas fa-wrench"},
      ]
      var size = this.menu.length
      this.menu.forEach((item,i)=>{
        var angle = ( (i*2*3.14159)/size ) - (3.14159/2)
        item.xOffset = radius * Math.cos(angle)
        item.yOffset = radius * Math.sin(angle) 
      })
      this.state = {
        expanded: false
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
      var menuComponents = this.menu.map((item)=>{
        if(!this.state.expanded)
          var style = {transform: "translate(0px, 0px)"}
        else{
          var style = {transform: "translate(" + item.xOffset + "px, " + item.yOffset + "px)"}
        }
        return <FloatingButton key={item.symbol} style={style} expanded={this.state.expanded} icon={item.symbol}/>
      })
      var menuStyle = this.state.expanded?{transform: "translate(-50%, -150px)"}:{transform: "translate(-50%, 0px)"}
      var menuSymbol = this.state.expanded?"fas fa-times":"fas fa-bars"
      return (
        <div style={menuStyle} className={styles.NavButton}>
          {menuComponents}
          <Swipeable onSwipedUp={this.expand.bind(this)} onSwipedDown={this.expand.bind(this)}>
            <FloatingButton expanded={this.state.expanded} icon={menuSymbol} onClick={this.expand.bind(this)}/>
          </Swipeable>
        </div>
      );
    }
  }
  
  export default NavButton;