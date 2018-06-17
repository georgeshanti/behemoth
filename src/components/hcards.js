import React, { Component } from 'react'

import styles from './hcards.module.css'



const HCards = props => {

	let cardstyles = {
		gridTemplateColumns: `repeat(${props.cards.length || 0 + 1},22em)`
	}

	let cards = props.cards.map((card,i) => (
		<div className={styles['h-scroll-card']}>
			<div className={styles['h-scroll-card-title']}>
				<h2>{card.title}</h2>
			</div>
			<div className={styles['h-scroll-card-content']}>
				<p>{card.desc}</p>
			</div>
			<div className={styles['h-scroll-card-pic']}>
				<img src={card.img}/>
			</div>
			<div className={styles['h-scroll-card-about-pic']}>
				<h2>{card.imgInfo.title}</h2>
				<h5>{card.imgInfo.subtitle}</h5>
			</div>
		</div>
	))

	return (
			<div className={styles['h-scroll-card-wrapper']}>
				{/*<div className={styles['h-scroll-card-container1']}>*/}
					<div className={styles['h-scroll-card-container']} style={cardstyles}>
						{cards}
					</div>
				 {/* </div>*/}
			</div>
		)
}


export default HCards
