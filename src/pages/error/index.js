import React, {Component} from 'react';
import styles from './style.module.css';
import gif from './gif.mp4';

export default class Events extends Component {
	render(){
		return (
			<div>
				<video autoplay="" muted="" loop id={styles['myVideo']}>
					<source src={gif} type="video/mp4" />
				</video>

				<div class={styles['container-fluid']}>
					<div class={styles["wrapper"]}>
						<div class={styles["error"]}> 404 ERROR </div>
						<div class={styles["text"]}>Not sure if you are following the right hacking tutorial, but this page does not exist...</div>
						<a class={styles["try-btn"]} href="http://www.excelmec.org/partners/"> Try this page </a>
					</div>
				</div>
			</div>
		)
	}
}