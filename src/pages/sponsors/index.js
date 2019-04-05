import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import styles from './style.module.css';
import SponsorGridCard from 'components/competition-grid-card';
import axios from 'axios';
import sponsorsData from './sponsor-data.json'

export default class Competitions extends Component {

	constructor(props) {
		super(props);
		 //initialise state
		this.state = {
			cardInfo: sponsorsData
		};

	}

    componentWillMount(){
		var comp = this;
		axios.get("https://cms.excelmec.org/sponsor/")
			.then(function (response) {
				comp.setState({cardInfo: response.data})
			})
		this.setState({items:this.state.initialItem})
	}

	render() {
		var cards = this.state.cardInfo
		var grid = []
		for(var i in cards){
			var gridItem = ( <a target="_blank" key={i} href={cards[i].link}><SponsorGridCard delay={i*100} details={cards[i]}/></a>)
			grid.push(gridItem)
		}
		
		return(
			<div className={styles["container"]}>
				<h1 className={styles['title']}>SPONSORS</h1>
			    {/* <div className={styles["dropdown-wrapper"]}>
					<div className="font1">Competitions</div>
					<Filter initialItems={this.initialDept} id={0} filterList={this.filterList} />
					<Filter initialItems={this.initialCate} id={1} filterList={this.filterList} />
				</div>  */}
				<div id='eventsContainer' className={styles["events-grid"]}>
					{grid}
				</div>
			</div>
		);
	}
}