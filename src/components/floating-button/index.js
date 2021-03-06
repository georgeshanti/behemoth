import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss';

class FloatingButton extends Component {
    render() {
      var scale = this.props.icon==="fas fa-phone"?"translate(-50%, -50%) scaleX(-1)":""
      var shadow = this.props.icon==="fas fa-phone"?"-4px 4px rgba(0, 0, 0, 0.1)":""
      return (
        <NavLink exact to={this.props.to} activeClassName={styles.active}>
          <div className={styles.FloatingButton} style={this.props.style} onClick={this.props.onClick}>
            <span className={styles['menu-text']} style={{background: this.props.color}}>{this.props.text}</span>
            <div className={styles["icon-holder"]}>
              <i className={this.props.icon + " " + styles.icon} style={{verticalAlign: 'middle', transform: scale, textShadow: shadow}}></i>
            </div>
          </div>
        </NavLink>
      );
    }
  }
  
  export default FloatingButton;