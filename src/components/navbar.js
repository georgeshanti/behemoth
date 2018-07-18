import React from 'react'
import { Link } from 'react-router-dom'

import Hamburger from './menu-hamburger'

import styles from './navbar.module.css'

import excelLogo from '../img/excel-text.png'

// sample navbar
const NavBar = props => (
    <div className={styles['navbar']}>
        <div className={styles['excel-logo']}>
            <Link to='/'><img src={excelLogo}/></Link>
        </div>
        <div></div>
        <div className={styles['nav-menu']}>
            <div className={styles['nav-menu-btn']}>register</div>
            <div className={styles['nav-menu-btn']}>abstracts</div>
            <div className={styles['nav-menu-hamburger']}>
                <Hamburger/>
            </div>
        </div>
    </div>
);

export default NavBar