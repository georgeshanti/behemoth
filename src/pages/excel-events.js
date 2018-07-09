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
			activeEvent: null,
			redirect : false,
			redirectAbout: false,
			initialItem:["event 1","event 2","event 3","event 4","event 5","event 6"],
			items:[]
		};
	}

    componentWillMount(){
		this.setState({items:this.state.initialItem})
	}

	//searching
	filterList(e){
		var updatedList=this.state.initialItem;
		updatedList=updatedList.filter(function( item){
			return item.toLowerCase().search(e.target.value.toLowerCase())!==-1
		});
		this.setState({items:updatedList});
	}

	closeEvent(e) {

		this.setState({redirect: true, redirectAbout: false});

		this.fadeOutContents(this.state.activeEvent)
		this.fadeInEvents()
		setTimeout(this.hideContent, 700)
	}

	hideContent() {
		document.getElementById('contentsContainer').classList.add('hidden')
		document.getElementById(this.state.activeEvent + '-content').classList.add('hidden')

		this.setState({
			activeEvent: null,
		})
	}

	showEvent(e) {


		this.setState({
			redirect: false,
			activeEvent: e,
			redirectAbout: true,
		});

		document.getElementById('contentsContainer').classList.remove('hidden')
		document.getElementById(e + '-content').classList.remove('hidden')

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

	fadeOutContents(x) {
		this.tl.to('#contentsContainer', 0.5, {autoAlpha: 0, scale: 0.1, ease: Power0.easeOut})
	}

	fadeInContents() {
		this.tl.fromTo('#contentsContainer', 0.5, {autoAlpha: 0, scale: 0.1}, {autoAlpha: 1, scale: 1, ease: Power0.easeIn});
	}


	render() {
		return(
			<div className='container'>
			    <div> <input type="text" placeholder="search"  onChange={this.filterList}/> </div>
				<div id='eventsContainer' className='events-grid'>
				   {this.state.items.indexOf("event 1")!==-1?
					  (<div id='event1' className=' event1 events' onClick={() =>this.showEvent('event1')}>
					       <div className=' event1 big-numbers'>
						   <img src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 1
						   </div>	  
					  </div>)
					:("")
				   }
				   {this.state.items.indexOf("event 2")!==-1?
					  (<div id='event2' className=' event2 events' onClick={() =>this.showEvent('event2')}>
					       <div className=' event2 big-numbers'>
						   <img src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 2
						   </div>
					  </div>)
					:("")
				    }
					{this.state.items.indexOf("event 3")!==-1?
					  (<div id='event3' className=' event3 events' onClick={() =>this.showEvent('event3')}>
					       <div className=' event3 big-numbers'>
						   <img src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 3
						   </div>
					   </div>)
					:("")
					}
					{this.state.items.indexOf("event 4")!==-1?
					  (<div id='event4' className=' event4 events' onClick={() =>this.showEvent('event4')}>
					       <div className=' event4 big-numbers'>
						   <img src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   Event 4
						   </div>
					  </div>)
					:("") 
				    }
					{this.state.items.indexOf("event 5")!==-1? 
					  (<div id='event5' className='event5 events ' onClick={() =>this.showEvent('event5')}>
					       <div className='event5 big-numbers '>
						   <img src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>
						   
						   Event 5
						   </div>
					  </div>)
					:("")
				    }
					{this.state.items.indexOf("event 6")!==-1?  
					  (<div id='event6' className='event6 events ' onClick={() =>this.showEvent('event6')}>
				           <div className='event6 big-numbers '>
						   <img src={require('../img/dummy-img.png')} className="grid-logo-image"/><br/>						   
						   Event 6
						   </div>
					  </div>)
				  :("")
				}
				</div>
				<div id='contentsContainer' className='events--expanded hidden'>
					<div id='contents-close' className='btn-close' onClick={this.closeEvent}><img src={require('../img/close.png')}/></div>
					<div id='event1-content' className='event-bg hidden'><CardsNew redirect={this.state.redirect} redirectAbout={this.state.redirectAbout}/></div>
					<div id='event2-content' className='event-bg hidden'><CardsNew redirect={this.state.redirect} redirectAbout={this.state.redirectAbout}/></div>
					<div id='event3-content' className='event-bg hidden'><CardsNew redirect={this.state.redirect} redirectAbout={this.state.redirectAbout}/></div>
					<div id='event4-content' className='event-bg hidden'><CardsNew redirect={this.state.redirect} redirectAbout={this.state.redirectAbout}/></div>
					<div id='event5-content' className='event-bg hidden'><CardsNew redirect={this.state.redirect} redirectAbout={this.state.redirectAbout}/></div>
					<div id='event6-content' className='event-bg hidden'><CardsNew redirect={this.state.redirect} redirectAbout={this.state.redirectAbout}/></div>
				</div>
			</div>
		);
	}
}