import React, {Component} from 'react'
import './excel-events.css'

export default class ExcelEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentEvent: null
		}
		this.showEvent = this.showEvent.bind(this);
		this.closeEvent = this.closeEvent.bind(this);
	}

	showEvent(e) {
		document.getElementById(e.target.id).classList.add('invisible');
		document.getElementById('contentsContainer').classList.remove('hidden');
		document.getElementById(e.target.id + '-content').classList.remove('hidden');
		this.setState({
			currentEvent: e.target.id
		});
	}

	closeEvent(e) {
		document.getElementById(this.state.currentEvent + '-content').classList.add('hidden');
		document.getElementById('contentsContainer').classList.add('hidden');
		document.getElementById(this.state.currentEvent).classList.remove('invisible');
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