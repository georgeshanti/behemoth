import React from 'react'

import FaIcon from './faicon'

import styles from './navbar-new.module.css'

import excelLogo from '../img/excel-no-text.png'




const Navbar = props => (
	<div className={styles['navbar-container']}>
		<div className={styles['navbar-back-button']}>
			{ props.hideBackButton?"":<FaIcon name="chevron-left"/>}
		</div>
		<div className={styles['navbar-excel-logo']}>
			<img src={excelLogo} alt="excel-2018-logo"/>
		</div>
		<div className={styles['navbar-menu-button']}>
			<FaIcon name="bars"/>
		</div>
	</div>
	)


export default Navbar