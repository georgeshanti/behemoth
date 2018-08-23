import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import styles from './style.module.css';
import { TimelineLite, Power0} from 'gsap';
import CompetitionCard from 'components/competition-card';
import Filter from 'components/filter-list';
import CompetitionGridCard from 'components/competition-grid-card';

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
			cardInfo: [
				{   department:"Computer Science",
				    category:"Online",
					about: {
						content: "A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough. Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.",
						date:"7 july",
						time:"10:30-11:30",
						venue:"no where?"
						},
					format: {
						prelims:"MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.",
					    final:"Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order"
						},
					rules: "anything ",
					contact: "lorem"
				},
				{   department:"Electronics",
				    category:"Offline",
					about: {
						content: "A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough. Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.",
						date:"7 july",
						time:"10:30-11:30",
						venue:"no where?"
						},
					format: {
						prelims:"MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.",
					    final:"Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order"
						},
					rules: "anything ",
					contact: "lorem"
				},
				{   department:"Robotics",
				    category:"Online",
					about: {
						content: "A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough. Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.",
						date:"7 july",
						time:"10:30-11:30",
						venue:"no where?"
						},
					format: {
						prelims:"MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.",
					    final:"Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order"
						},
					rules: "anything ",
					contact: "lorem"
				},
				{   department:"Non-tech",
				    category:"Offline",
					about: {
						content: "A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough. Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.",
						date:"7 july",
						time:"10:30-11:30",
						venue:"no where?"
						},
					format: {
						prelims:"MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.",
					    final:"Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order"
						},
					rules: "anything ",
					contact: "lorem"
				},
				{   department:"Computer Science",
				    category:"Online",
					about: {
						content: "A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough. Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.",
						date:"7 july",
						time:"10:30-11:30",
						venue:"no where?"
						},
					format: {
						prelims:"MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.",
					    final:"Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order"
						},
					rules: "anything ",
					contact: "lorem"
				},
				{  department:"Computer Science",
				   category:"Offline",
					about: {
						content: "A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough. Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.",
						date:"7 july",
						time:"10:30-11:30",
						venue:"no where?"
						},
					format: {
						prelims:"MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.",
					    final:"Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order"
						},
					rules: "anything ",
					contact: "lorem"
				},
			]
		};

	}

    componentWillMount(){
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
		console.log(this.listContains(0))
		var closeEvent = this.closeEvent
		var index = this.state.index
		var cardInfo = this.state.cardInfo[this.state.index]
		var grid = []
		for(var i=0 ; i<12 ; i++){
			var gridItem = ( <Link to={"/competitions/"+i}><CompetitionGridCard delay={i*100} /></Link>)
			grid.push(gridItem)
		}

		return(
			<div className={styles["container"]}>
			    {/* <div className={styles["dropdown-wrapper"]}>
					<div className="font1">Competitions</div>
					<Filter initialItems={this.initialDept} id={0} filterList={this.filterList} />
					<Filter initialItems={this.initialCate} id={1} filterList={this.filterList} />
				</div>  */}
				<div id='eventsContainer' className={styles["events-grid"]}>
					{grid}
				</div>
				<Route path='/competitions/:event/:section?' component={CompetitionCard}/>
			</div>
		);
	}
}