import React, {Component} from 'react';
import './excel-events.css';
import { TimelineLite, Power0} from 'gsap';
import CardsNew from '../components/cards-new';

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


		//initialise timeline
		this.tl = new TimelineLite();

		//initialise state
		this.state = {
			initialItem:["All","Dept 1","Dept 2","Dept 3","Dept 4"],
			items:[],
			index: 0,
			cardInfo: [
				{
					about: {content:"this is evnt one about please do change me",
							date:"7 july",
							time:"10:30-11:30",
							venue:"no where?"
						     },
					format: {prelims:"MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.",
					         final:"Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order"
					},
					rules: "anything ",
					contact: "lorem"
				},
				{
					about: "",
					format: "",
					rules: "",
					contact: ""
				},
				{
					about: "",
					format: "",
					rules: "",
					contact: ""
				},
				{
					about: "",
					format: "",
					rules: "",
					contact: ""
				},
				{
					about: "",
					format: "",
					rules: "",
					contact: ""
				},
				{
					about: "",
					format: "",
					rules: "",
					contact: ""
				},
			]
		};
	}

    componentWillMount(){
		this.setState({items:this.state.initialItem})
	}

	showOptions(){
		document.getElementsByClassName("dropdown-content")[0].classList.remove("hidden");
	}

	//searching
	filterList(dept){
		console.log(dept)
		if(dept!=="All")
		{ var updatedList=this.state.initialItem;
		  updatedList=updatedList.filter(function( item){
		    	return item.toLowerCase().search(dept.toLowerCase())!==-1
		  });
		  this.setState({items:updatedList});
		}  
		else{
			this.setState({items:this.state.initialItem});
		}
		document.getElementsByClassName("dropdown-content")[0].classList.add("hidden");
	}

	closeEvent(e) {

		this.fadeOutContents()
		this.fadeInEvents()
		setTimeout(this.hideContent, 700)
	}

	hideContent() {
		document.getElementById('contentsContainer').classList.add('hidden')
		document.getElementById('event-content').classList.add('hidden')
	}

	showEvent(eventNO) {

		// to decide which card info to pass
		this.setState({index: eventNO})
	
		document.getElementById('contentsContainer').classList.remove('hidden')
		document.getElementById('event-content').classList.remove('hidden')

		this.fadeOutEvents()
		this.fadeInContents()
		
	}

	fadeOutEvents() {
		this.tl.to('#eventsContainer', 0.5, {
			autoAlpha: 0,
			ease: Power0.easeOut,
		},
	)
	}

	fadeInEvents() {
		this.tl.to('#eventsContainer', 0.5, { autoAlpha: 1, ease: Power0.easeIn})
	}

	fadeOutContents() {
		this.tl.to('#contentsContainer', 0.5, {autoAlpha: 0, scale: 0.1, ease: Power0.easeOut})
	}

	fadeInContents() {
		this.tl.fromTo('#contentsContainer', 0.5, {autoAlpha: 0, scale: 0.1}, {autoAlpha: 1, scale: 1, ease: Power0.easeIn});
	}


	render() {
		return(
			<div className='container'>
			   <div className="dropdown">
                    <div className="dropbtn" onClick={this.showOptions}>{this.state.items[0]}</div>
                          <div className="dropdown-content hidden">
						     <div onClick={() =>this.filterList("All")}>All dept</div>
                             <div onClick={() =>this.filterList("Dept 1")}>Dept 1</div>
                             <div onClick={() =>this.filterList("Dept 2")}>Dept 2</div>
                             <div onClick={() =>this.filterList("Dept 3")}>Dept 3</div>
							 <div onClick={() =>this.filterList("Dept 4")}>Dept 4</div>
                          </div>
                </div>
				
				<div id='eventsContainer' className='events-grid'>
				   {this.state.items.indexOf("Dept 1")!==-1?
					  (<div id='event1' className='events' onClick={() =>this.showEvent(0)}>
					       <div className='big-numbers'>
						   <img alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 1
						   </div>	  
					  </div>)
					:("")
				   }
				   {this.state.items.indexOf("Dept 2")!==-1?
					  (<div id='event2' className='events' onClick={() =>this.showEvent(1)}>
					       <div className='big-numbers'>
						   <img  alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 2
						   </div>
					  </div>)
					:("")
				    }
					{this.state.items.indexOf("Dept 3")!==-1?
					  (<div id='event3' className='events' onClick={() =>this.showEvent(2)}>
					       <div className='big-numbers'>
						   <img alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 3
						   </div>
					   </div>)
					:("")
					}
					{this.state.items.indexOf("Dept 4")!==-1?
					  (<div id='event4' className='events' onClick={() =>this.showEvent(3)}>
					       <div className='big-numbers'>
						   <img alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 4
						   </div>
					  </div>)
					:("") 
				    }
					{this.state.items.indexOf("Dept 1")!==-1? 
					  (<div id='event5' className='events' onClick={() =>this.showEvent(4)}>
					       <div className='big-numbers '>
						   <img alt='' src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   
						   Event 5
						   </div>
					  </div>)
					:("")
				    }
					{this.state.items.indexOf("Dept 2")!==-1?  
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
					<div id='event-content' className='event-bg hidden'><CardsNew index={this.state.index} content={this.state.cardInfo[this.state.index]} /></div>
				</div>
			</div>
		);
	}
}