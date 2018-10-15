import React, { Component } from 'react'
import FloatingButton from 'components/floating-button'
import Swipeable from 'react-swipeable'
import styles from './style.module.scss';

class NavButton extends Component {
    constructor(props){
      super(props);
      var radius = 80;
      this.menu = [
        {symbol: "fas fa-home", link: "/", background: "rgb(227, 93, 57)", text: "Home"},
        {symbol: "fas fa-gamepad", link: "/play", background: "#578bbb", text: "ExPlay"},
        {symbol: "fas fa-trophy", link: "/competitions", background: "#bf8908", text: "Competitions"},
        {symbol: "fas fa-calendar-alt", link: "/schedule", background: "#6815c2", text: "Schedule"},
        {symbol: "fab fa-bandcamp", link: "/events", background: "rgb(104, 104, 104)", text: "Events"},
        {symbol: "fas fa-phone", link: "/contacts", background: "rgb(69, 90, 98)", text: "Contacts"},
      ]
      // this.menu = [
      //   {symbol: "fas fa-home", link: "/", background: "rgb(227, 93, 57)", text: "Home"},
      //   {symbol: "fas fa-gamepad", link: "/play", background: "#6815c2", text: "User"},
      //   {symbol: "fas fa-trophy", link: "/competitions", background: "rgb(227, 93, 57)", text: "Competitions"},
      //   {symbol: "fas fa-calendar-alt", link: "/schedule", background: "#6815c2", text: "Schedule"},
      //   {symbol: "fab fa-bandcamp", link: "/events", background: "rgb(227, 93, 57)", text: "Events"},
      //   {symbol: "fas fa-phone", link: "/contacts", background: "#6815c2", text: "Workshops"},
      // ]
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
      if(this.state.expanded)
        this.setState({expanded: false})
      else
        this.setState({expanded: true})
    }

    render() {
      var i = 0
      var menuComponents = this.menu.map((item)=>{
        i++
        var style
        if(!this.state.expanded)
          style = {transform: "translate(0px, 0px)", background: item.background}
        else
          style = {transform: "translate(" + item.xOffset + "px, " + item.yOffset + "px)", background: item.background}
        
        return <FloatingButton key={i} background={item.background} color={item.color} text={item.text} to={item.link} style={style} expanded={this.state.expanded} icon={item.symbol} onClick={this.expand(false)} />
      })

      var menuClass = this.state.expanded?styles["expanded"]:""
      var menuSymbol = this.state.expanded?"fas fa-times":"fas fa-bars"
      // var menuStyle = this.state.expanded?{borderWidth: "3px", borderColor: "#000000"}:{borderColor: "#ffffff"}
      return (
        <div className={styles.NavButton + " " + menuClass}>
          <div className={styles["menu-items"]}>
            <div className={styles["menu-overlay"]}></div>
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