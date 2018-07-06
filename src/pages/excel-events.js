import React, {Component} from 'react'
import './excel-events.css'
import { TimelineLite, TweenMax, Power0 } from 'gsap';

export default class ExcelEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentEvent: null
		}
		this.showEvent = this.showEvent.bind(this);
		this.closeEvent = this.closeEvent.bind(this);
		this.setClasses = this.setClasses.bind(this);

		this.tl = new TimelineLite();
	}

	showEvent(e) {

		var x = document.getElementById('contentsContainer')
		var y = document.getElementById(e.target.id);
		this.tl.to(y, 0.5, {autoAlpha: 0, ease: Power0.easeOut} );
		//document.getElementById(e.target.id).classList.add('invisible');
		this.tl.set(x, {autoAlpha: 1});
		document.getElementById('contentsContainer').classList.remove('hidden');
		document.getElementById(e.target.id + '-content').classList.remove('hidden');
		this.setState({
			currentEvent: e.target.id
		});
		this.tl.fromTo(x, 0.7, {y: 200}, {y: -300, autoAlpha: 1, ease:Power0.easeIn});
	}

	closeEvent(e) {
		var y = document.getElementById(this.state.currentEvent);
		var x = document.getElementById('contentsContainer');
		this.tl.to(x, 0.7, {y: 300, autoAlpha: 0, ease: Power0.easeOut });
		this.tl.to(y, 0.5, {autoAlpha: 1, ease: Power0.easeIn});
		setTimeout(this.setClasses, 700);
	}

	setClasses() {
		document.getElementById(this.state.currentEvent + '-content').classList.add('hidden');
		document.getElementById('contentsContainer').classList.add('hidden');
		this.setState({
			currentEvent: null
		});
	}

	


	render() {
		return(
			<div className='container'>
				<div className='events-grid'>
					<div id='event1' className='events' onClick={this.showEvent}></div>
					<div id='event2' className='events' onClick={this.showEvent}></div>
					<div id='event3' className='events' onClick={this.showEvent}></div>
					<div id='event4' className='events' onClick={this.showEvent}></div>
					<div id='event5' className='events' onClick={this.showEvent}></div>
					<div id='event6' className='events' onClick={this.showEvent}></div>
				</div>
				<div id='contentsContainer' className='events--expanded hidden'>
					<button id='contents-close' className='btn-close' onClick={this.closeEvent}>&#10006;</button>
					<div id='event1-content' className='contents hidden'>Content1</div>
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