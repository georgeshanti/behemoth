import React, {Component} from 'react';
import styles from './style.module.css';
import ScheduleGridCard from 'components/schedule-grid-card';
import DropDown from 'components/dropdown';
import LogoHeader from 'components/logo-header';

export default class Events extends Component {

	constructor(props) {
		super(props);

		 //initialise state
		this.state = {
			index: 0,
			department: 0
		}

		this.departments = ['All Departments', 'Computer Science', 'Robotics', 'Electronics', 'Non-Tech']
		this.cardInfo = ["day_one", "day_two", "day_three"]
		this.changeTab = this.changeTab.bind(this)
	};

	changeTab = (i) => (e) => {
		this.setState({ index: i})
	}

	changeDepartment = (i) => (e) => {
		this.setState({department: i})
	}

	render() {
		var grid = []
		var tabs = []
		var cards = this.cardInfo
		for(var i in cards){
			i = parseInt(i)
			var classn = (i===this.state.index)?styles['active']:{}
			var gridItem = ( <ScheduleGridCard key={i} day={i} delay={i*100} details={cards[i]} departments={this.departments} department={this.state.department}/>)
			var tabItem = ( <div key={i} className={styles['schedule-tab'] + " " + classn} onClick={this.changeTab(i)}>Day {i+1}</div>)
			grid.push(gridItem)
			tabs.push(tabItem)
		}
		
		return(
			<div className={styles["container"]}>
				<LogoHeader />
				<h1 className={styles['title']}>SCHEDULE</h1>
				<div className={styles['filter']}>
					<DropDown items={this.departments} option={this.state.department} handle={this.changeDepartment}/>
				</div>
				<div className={styles['schedule-tab-container']}>
					{tabs}
				</div>
				<div className={styles["schedule-scroll"]}>
					<div id='scheduleContainer' className={styles["schedule-grid"]} style={{transform: "translateX(-"+this.state.index*100+"%)"}}>
							{grid}
					</div>
				</div>
			</div>
		);
	}
}