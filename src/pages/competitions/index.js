import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import styles from './style.module.css';
import { TimelineLite, Power0} from 'gsap';
import CompetitionCard from 'components/competition-card';
import Filter from 'components/filter-list';
import CompetitionGridCard from 'components/competition-grid-card';
import axios from 'axios';

export default class Events extends Component {

	constructor(props) {
		super(props);
		//method binding
		this.showEvent = this.showEvent.bind(this)
		this.closeEvent = this.closeEvent.bind(this)
		this.hideContent = this.hideContent.bind(this)
		this.filterList=this.filterList.bind(this)
		this.listContains=this.listContains.bind(this)


		//initialise timeline
		this.tl = new TimelineLite();

		//initial categories for filtering
		 this.initialDept=["All Departments","Computer Science","Electronics","Robotics","Non-tech"]
		 this.initialCate=["All Categories","Online","Offline"]
		
		 //initialise state
		this.state = {
			currentOption:["All Departments","All Categories"],  //options for filter
			index: 0,
			cardInfo: {}
		};

	}

    componentWillMount(){
		var comp = this;
		axios.get("https://cms.excelmec.org/competition/")
			.then(function (response) {
				console.log(response.data)
				comp.setState({cardInfo: response.data})
			})
		// fetch("http://cms.excelmec.org/competition/")
		// 	.then(response => response.json())
		// 	.then((data) => {
		// 		comp.setState({cardInfo: data})
		// 	})
		this.setState({items:this.state.initialItem})
	}


	//assigning current options
	filterList(item,index){  //index 0 dept ,1 category
		let temp=this.state.currentOption.slice()
		temp[index]=item
	 this.setState({currentOption : temp})				
	}

	//filtering cards
	listContains(index){
		if(this.state.currentOption[0]==="All Departments"){
			if(this.state.cardInfo[index].category === this.state.currentOption[1] || this.state.currentOption[1]==="All Categories")
				   return true	   
		}
		
		if(this.state.currentOption[1]==="All Categories"){
			if(this.state.cardInfo[index].department === this.state.currentOption[0])
				   return true	   
		}
		if(this.state.cardInfo[index].department === this.state.currentOption[0] && this.state.cardInfo[index].category === this.state.currentOption[1]){
			return true
		}

         return false
	}

	closeEvent(e) {

		// this.fadeOutContents()
		// this.fadeInEvents()
		// setTimeout(this.hideContent, 700)
	}

	hideContent() {
		// document.getElementById('contentsContainer').classList.add(styles["hidden"])
	}

	showEvent(eventNO) {
		console.log(eventNO)
		this.props.history.push('/competitons/'+eventNO)
	}

	render() {
		console.log(this.state.cardInfo)
		var closeEvent = this.closeEvent
		var index = this.state.index
		var cards = this.state.cardInfo
		var grid = []
		for(var i in cards){
			var gridItem = ( <Link to={"/competitions/"+cards[i].codename}><CompetitionGridCard delay={i*100} details={cards[i]}/></Link>)
			grid.push(gridItem)
		}
		
		return(
			<div className={styles["container"]}>
				<h1 className={styles['title']}>COMPETITIONS</h1>
			    {/* <div className={styles["dropdown-wrapper"]}>
					<div className="font1">Competitions</div>
					<Filter initialItems={this.initialDept} id={0} filterList={this.filterList} />
					<Filter initialItems={this.initialCate} id={1} filterList={this.filterList} />
				</div>  */}
				<div id='eventsContainer' className={styles["events-grid"]}>
					{grid}
				</div>
				<Route path='/competitions/:competition/:section?' component={CompetitionCard}/>
			</div>
		);
	}
}