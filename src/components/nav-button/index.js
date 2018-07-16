import React, { Component } from 'react'
import FloatingButton from 'components/floating-button'
import Swipeable from 'react-swipeable'
import styles from './style.module.scss';

class NavButton extends Component {
    constructor(props){
      super(props);
      var radius = 80;
      this.menu = [
        {symbol: "fas fa-home", link: "/"},
        {symbol: "fas fa-user-alt", link: "/user"},
        {symbol: "fas fa-gamepad", link: "/competitions"},
        {symbol: "fas fa-calendar-alt", link: "/schedule"},
        {symbol: "fas fa-basketball-ball", link: "/events"},
        {symbol: "fas fa-wrench", link: "/settings"},
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

    expand = (prevent) => (e) => {
      if(prevent)
        e.preventDefault()
      console.log(this.state.expanded)
      if(this.state.expanded)
        this.setState({expanded: false})
      else
        this.setState({expanded: true})
    }

    render() {
      var menuAction = this.expand.bind(this)
      var menuComponents = this.menu.map((item)=>{
        if(!this.state.expanded)
          var style = {transform: "translate(0px, 0px)"}
        else
          var style = {transform: "translate(" + item.xOffset + "px, " + item.yOffset + "px)"}
        
        return <FloatingButton to={item.link} style={style} expanded={this.state.expanded} icon={item.symbol} onClick={this.expand(false).bind(this)}/>
      })

      var menuStyle = this.state.expanded?{transform: "translate(-50%, -150px)"}:{transform: "translate(-50%, 0px)"}
      var menuSymbol = this.state.expanded?"fas fa-times":"fas fa-bars"
      
      return (
        <div style={menuStyle} className={styles.NavButton}>
          {menuComponents}
          <Swipeable onSwipedUp={this.expand.bind(this)} onSwipedDown={this.expand.bind(this)}>
            <FloatingButton to="/nav" expanded={this.state.expanded} icon={menuSymbol} onClick={this.expand(true).bind(this)}/>
          </Swipeable>
        </div>
      );
    }
  }
  
  export default NavButton;