import React, { Component } from 'react'
import FloatingButton from 'components/floating-button'
import Swipeable from 'react-swipeable'
import styles from './style.module.scss';

class NavButton extends Component {
    constructor(props){
      super(props);
      var radius = 80;
      this.menu = [
        {symbol: "fas fa-home", link: "/", background: "#9bcc5f", text: "Home"},
        {symbol: "fas fa-user-alt", link: "/user", background: "#578bbb", text: "User"},
        {symbol: "fas fa-gamepad", link: "/competitions", background: "#bf8908", text: "Competitions"},
        {symbol: "fas fa-calendar-alt", link: "/schedule", background: "#6815c2", text: "Schedule"},
        {symbol: "fas fa-basketball-ball", link: "/events", background: "#64806b", text: "Events"},
        {symbol: "fas fa-wrench", link: "/settings", background: "rgb(30, 129, 115)", text: "Workshops"},
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
      this.expand = this.expand.bind(this)
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
          var style = {transform: "translate(0px, 0px)", background: item.background}
        else
          var style = {transform: "translate(" + item.xOffset + "px, " + item.yOffset + "px)", background: item.background}
        
        return <FloatingButton background={item.background} color={item.color} text={item.text} to={item.link} style={style} expanded={this.state.expanded} icon={item.symbol} onClick={this.expand(false)} />
      })

      var menuClass = this.state.expanded?styles["expanded"]:""
      var menuSymbol = this.state.expanded?"fas fa-times":"fas fa-bars"
      // var menuStyle = this.state.expanded?{borderWidth: "3px", borderColor: "#000000"}:{borderColor: "#ffffff"}
      return (
        <div className={styles.NavButton + " " + menuClass}>
          <div className={styles["menu-items"]}>
            <div className={styles["menu-overlay"]}></div>
            {/* <div className={styles["menu-background"]} style={{background: "none", borderStyle: "solid", borderColor: "#ffffff", width: "98px", height: "98px", borderWidth: "65px"}}></div> */}
            {/* <div className={styles["menu-background"]}></div>  */}
            {menuComponents}
          </div>
          <Swipeable onSwipedUp={this.expand(true)} onSwipedDown={this.expand(true)}>
            <FloatingButton to="/nav" expanded={this.state.expanded} icon={menuSymbol} onClick={this.expand(true)}/>
          </Swipeable>
        </div>
      );
    }
  }
  
  export default NavButton;