import React, {Component} from 'react';
import './excel-events.css';
import { TimelineLite, Power0} from 'gsap';
import CardsNew from '../components/cards-new';
import FilterList from '../components/filterList';

export default class ExcelEvents extends Component {

	constructor(props) {
		super(props);

		//method binding
		this.showEvent = this.showEvent.bind(this)
		this.closeEvent = this.closeEvent.bind(this)
		this.fadeOutEvents = this.fadeOutEvents.bind(this)
		this.fadeInEvents = this.fadeInEvents.bind(this)
		this.fadeOutContents = this.fadeOutContents.bind(this)
		this.fadeInContents = this.fadeInContents.bind(this)
		this.hideContent = this.hideContent.bind(this)
		this.filterList=this.filterList.bind(this)
		this.listContains=this.listContains.bind(this)


		//initialise timeline
		this.tl = new TimelineLite();

		//initial categories for filtering
		 this.initialDept=["All","Dept 1","Dept 2","Dept 3","Dept 4"]
		 this.initialCate=["All","Online","Offline"]
		
		 //initialise state
		this.state = {
			currentOption:["All","All"],
			index: 0,
			cardInfo: [
				{   department:"Dept 1",
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
				{   department:"Dept 2",
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
				{   department:"Dept 3",
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
				{   department:"Dept 4",
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
				{   department:"Dept 1",
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
				{  department:"Dept 1",
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
	filterList(item,index){
     this.setState({currentOption:this.state.currentOption.splice(index,0,item)})				
	}

	//filtering
	listContains(index){
		if(this.state.cardInfo[index].department === this.state.currentOption[0] || this.state.cardInfo[index].category === this.state.currentOption[1]){
			return true
		}
		else
		    return false
	}

	closeEvent(e) {

		this.fadeOutContents()
		this.fadeInEvents()
		setTimeout(this.hideContent, 700)
	}

	hideContent() {
		document.getElementById('contentsContainer').classList.add('hidden')
	}

	showEvent(eventNO) {

		// to decide which card info to pass

		this.setState({ index : eventNO}, function() {
			console.log(eventNO, this.state.index)

		//console.log(eventNO,this.state.cardInfo[eventNO], this.state.index)
	
		document.getElementById('contentsContainer').classList.remove('hidden')

		this.fadeOutEvents()
		this.fadeInContents()
		})
	}

	fadeOutEvents() {
		this.tl.to('#eventsContainer', 0.4, {
			autoAlpha: 0,
			ease: Power0.easeOut,
		},
	)
	}

	fadeInEvents() {
		this.tl.to('#eventsContainer', 0.4, { autoAlpha: 1, ease: Power0.easeIn})
	}

	fadeOutContents() {
		this.tl.to('#contentsContainer', 0.4, {autoAlpha: 0, scale: 0.1, ease: Power0.easeOut})
	}

	fadeInContents() {
		this.tl.fromTo('#contentsContainer', 0.4, {autoAlpha: 0, scale: 0.1}, {autoAlpha: 1, scale: 1, ease: Power0.easeIn});
	}


	render() {
		return(
			<div className='container'>
			    <FilterList initialItems={this.initialDept} id={0} filterList={this.filterList} />
				<FilterList intitalItems={this.initialCate} id={1} filterList={this.filterList} />
				
				<div id='eventsContainer' className='events-grid'>
				   { this.listContains(0)  ?
					  (<div id='event1' className='events' onClick={() =>this.showEvent(0)}>
					       <div className='big-numbers'>
						   <img alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 1
						   </div>	  
					  </div>)
					:("")
				   }
				   { this.listContains(1) ?
					  (<div id='event2' className='events' onClick={() =>this.showEvent(1)}>
					       <div className='big-numbers'>
						   <img  alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 2
						   </div>
					  </div>)
					:("")
				    }
					{ this.listContains(2)?
					  (<div id='event3' className='events' onClick={() =>this.showEvent(2)}>
					       <div className='big-numbers'>
						   <img alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 3
						   </div>
					   </div>)
					:("")
					}
					{ this.listContains(3)?
					  (<div id='event4' className='events' onClick={() =>this.showEvent(3)}>
					       <div className='big-numbers'>
						   <img alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 4
						   </div>
					  </div>)
					:("") 
				    }
					{ this.listContains(4)? 
					  (<div id='event5' className='events' onClick={() =>this.showEvent(4)}>
					       <div className='big-numbers '>
						   <img alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   
						   Event 5
						   </div>
					  </div>)
					:("")
				    }
					{ this.listContains(5)?  
					  (<div id='event6' className='events' onClick={() =>this.showEvent(5)}>
				           <div className='big-numbers '>
						   <img alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>						   
						   Event 6
						   </div>
					  </div>)
				  :("")
				}
				</div>
				<div id='contentsContainer' className='events--expanded hidden'>
					<div id='contents-close' className='btn-close' onClick={this.closeEvent}><img  alt='' src={require('../img/close.png')}/></div>
					<div id='event-content' className='event-bg'><CardsNew index={this.state.index} Eventcontent={this.state.cardInfo[this.state.index]}/></div>
				</div>
			</div>
		);
	}
}