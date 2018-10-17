import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import styles from './style.module.css';
import CompetitionCard from 'components/competition-card';
// import Filter from 'components/filter-list';
import CompetitionGridCard from 'components/competition-grid-card';
import axios from 'axios';
import DropDown from 'components/dropdown';

export default class Competitions extends Component {

	constructor(props) {
		super(props);
		//method binding
		

		//initial categories for filtering
		 this.initialDept=["All Departments","Computer Science","Electronics","Robotics","Non-tech"]
		 this.initialCate=["All Categories","Online","Offline"]
		
		 //initialise state
		this.state = {
			department: 0,
			category: 0,  //options for filter
			cardInfo: {},
		};

		this.departments = ['All Departments', 'Computer Science', 'Robotics', 'Electronics', 'Non-Tech']
		this.categories = ['Online/Offline', 'Online', 'Offline']
	}

	changeCategory = (i) => (e) => {
		this.setState({category: i})
	}

	changeDepartment = (i) => (e) => {
		this.setState({department: i})
	}

    componentWillMount(){
		var comp = this;
		axios.get("https://cms.excelmec.org/competition/")
			.then(function (response) {
				comp.setState({cardInfo: response.data})
			})
		this.setState({items:this.state.initialItem})
	}

	render() {
		var cards = this.state.cardInfo
		var grid = []
		for(var i in cards){
			if(this.state.category!=0 && this.categories[this.state.category]!=cards[i].category)
				continue
			if(this.state.department!=0 && this.departments[this.state.department]!=cards[i].department)
				continue
			var gridItem = ( <Link key={i} to={"/competitions/"+cards[i].codename}><CompetitionGridCard delay={i*100} details={cards[i]}/></Link>)
			grid.push(gridItem)
		}
		
		return(
			<div className={styles["container"]}>
				<h1 className={styles['title']}>COMPETITIONS</h1>
				<div className={styles['filter']}>
					<DropDown items={this.departments} option={this.state.department} handle={this.changeDepartment}/>
					<DropDown items={this.categories} option={this.state.category} handle={this.changeCategory}/>
				</div>
				<div id='eventsContainer' className={styles["events-grid"]}>
					{grid}
				</div>
				<Route path='/competitions/:competition' component={CompetitionCard}/>
			</div>
		);
	}
}