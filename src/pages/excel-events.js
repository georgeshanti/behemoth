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


		//initialise timeline
		this.tl = new TimelineLite();

		//initialise state
		this.state = {
			activeEvent: null,
		};
	}

	closeEvent(e) {
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
			activeEvent: e.target.id,
		});

		document.getElementById('contentsContainer').classList.remove('hidden')
		document.getElementById(e.target.id + '-content').classList.remove('hidden')

		this.fadeOutEvents()
		this.fadeInContents(e)

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

	fadeInContents(e) {
		this.tl.fromTo('#contentsContainer', 0.5, {autoAlpha: 0, scale: 0.1}, {autoAlpha: 1, scale: 1, ease: Power0.easeIn});
	}


	render() {
		return(
			<div className='container'>
				<div id='eventsContainer' className='events-grid'>
					<div id='event1' className='events' onClick={this.showEvent}>
					</div>
					<div id='event2' className='events big-numbers' onClick={this.showEvent}></div>
					<div id='event3' className='events' onClick={this.showEvent}></div>
					<div id='event4' className='events' onClick={this.showEvent}></div>
					<div id='event5' className='events' onClick={this.showEvent}></div>
					<div id='event6' className='events' onClick={this.showEvent}></div>
				</div>
				<div id='contentsContainer' className='events--expanded hidden'>
					<div id='contents-close' className='btn-close' onClick={this.closeEvent}><img src={require('../img/access-denied(1).png')}/></div>
					<div id='event1-content' className='event-bg hidden'><CardsNew/></div>
					<div id='event2-content' className='contents hidden'>Content2</div>
					<div id='event3-content' className='contents hidden'>Content3</div>
					<div id='event4-content' className='contents hidden'>Content4</div>
					<div id='event5-content' className='contents hidden'>Content5</div>
					<div id='event6-content' className='contents hidden'>Content6</div>
				</div>
			</div>
		);
	}
}