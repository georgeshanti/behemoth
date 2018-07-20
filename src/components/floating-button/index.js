import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss';

class FloatingButton extends Component {
    render() {
      return (
        <NavLink exact to={this.props.to} activeClassName={styles.active}>
          <div style={this.props.style} className={styles.FloatingButton} style={this.props.style} onClick={this.props.onClick}>
            <i className={this.props.icon + " " + styles.icon} style={{verticalAlign: 'middle'}}></i>
          </div>
        </NavLink>
      );
    }
  }
  
  export default FloatingButton;