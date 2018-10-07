import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import styles from './style.module.css';
import Filter from 'components/filter-list';
import ScheduleGridCard from 'components/schedule-grid-card';

export default class Events extends Component {

	constructor(props) {
		super(props);

		 //initialise state
		this.state = {
			index: 0,
			cardInfo: [
					{   
						day:"One",
					    category:"Online",
						about:"about",
						contents:[
							{
								from:"3:40",to:"9:00",title:"competition a"
							},
							{
								from:"3:50",to:"9:00",title:"competition b"
							},
							{
								from:"3:59",to:"9:00",title:"competition c"
							},
						]
					},
					{   
						day:"Two",
					    category:"Online",
						about:"about",
						contents:[
							{
								from:"3:40",to:"9:00",title:"competition a"
							},
							{
								from:"3:50",to:"9:00",title:"competition b"
							},
							{
								from:"3:59",to:"9:00",title:"competition c"
							}
						]
					},
					{   
						day:"Three",
					    category:"Online",
						about:"about",
						contents:[
							{
								from:"3:40",to:"9:00",title:"competition a"
							},
							{
								from:"3:50",to:"9:00",title:"competition b"
							},
							{
								from:"3:59",to:"9:00",title:"competition c"
							}
						]
					}
				]
			}
		};

	render() {
		console.log(this.state.cardInfo)
		var grid = []
		var cards = this.state.cardInfo
		for(var i in cards){
			var gridItem = ( <ScheduleGridCard delay={i*100} details={cards[i]}/>)
			grid.push(gridItem)
		}
		
		return(
			<div className={styles["container"]}>
				<h1 className={styles['title']}>SCHEDULE</h1>
				<div id='scheduleContainer' className={styles["schedule-grid"]}>
					{grid}
				</div>
			</div>
		);
	}
}