import React, {Component} from 'react'

import FaIcon from '../components/faicon'
import HCards from '../components/hcards'
import styles from './events-new.module.css'

import beconLogo from '../img/becon-text.png'
import beconBrain from '../img/becon-brain.png'

import Charu from '../img/charu.jpg'
import Rajesh from '../img/rajesh.jpg'
import Jaydeep from '../img/jaydeep.jpg'
export default class EventsPage extends Component{

	constructor(props){
		super(props)
		this.state = {
			eventName: 'Becon 2018',
			eventDate: '14 July 2018',//Date.now(),
			eventVenue: { 
				name:'Cochin Gymkhana, Vytilla, Kochi',
				coords: [9.961196, 76.312707]
			},
			topics: [
				{
					title: 'Artificial Intelligence',
					desc: 'Artificial intelligence (AI) in healthcare uses algorithms and software to approximate human cognition in the analysis of complex medical data. AI programs have been developed and applied to practices such as diagnosis processes, treatment protocol development and care. Presentations should focus on the promise and potential of AI in healthcare and its applications.'
				},
				{
					title: 'Robotics',
					desc: 'Robots are everywhere from science fiction to your local hospital, where they are changing healthcare. Robots are taking on more challenging tasks in today’s medical applications with their improved capabilities in surgical procedures, robotic medicine dispensing, rehabilitation and movement therapy. Presentations should focus on how robotics is changing healthcare.'
				},
				{
					title: 'Nanotechnology',
					desc: 'Nanotechnology is becoming a crucial driving force behind innovation in medicine and healthcare, with a range of advances including nanoscale therapeutics and imaging technologies. The major challenges of nanotechnology are its toxicity, environmental hazards, production cost and accessibility. Presentations should focus on the role of nanotechnology in healthcare.'
				},
				{
					title: 'Bioinformatics',
					desc: 'Clinical bioinformatics is an area of healthcare science responsible for developing and improving methods for acquiring, storing, organising and analysing biological data that supports the delivery of patient care. Presentations should focus on how bioinformatics and healthcare fits into the new trend of device connectivity, empowering a new series of applications for enhanced quality of life through technology.'
				},
				{
					title: 'Brain-Computer Interface',
					desc: 'Brain-Computer Interface (BCI), is a direct communication pathway between an enhanced or wired brain and an external device. BCI differs from neuromodulation in that it allows for bidirectional information flow. BCIs are often directed at researching, mapping, assisting, augmenting, or repairing human cognitive or sensory-motor functions. Presentations should focus on developments, trends and potential of Brain-Computer Interface in the field of medicine.'
				},
				{
					title: 'Medical Electronics',
					desc: 'Since the turn of the century, medical technology has accelerated dramatically. This is in no small part due to advancements in electronics. The current cycle of innovation for miniaturisation and efficiency encourages the use of more such devices and equipment for healthcare. Presentation should focus on the latest advancements in the field of medical electronics and future avenues of the field.'
				},
			],
			cards: [
				{
					title: 'Start-ups, Entrepreneurship and beyond',
					desc: 'This session will give the students an insight into building their own start-up. It will also include a brief overview the entrepreneurial skill set  and crisis management.',
					img: Charu,
					imgInfo: {
						title: 'Mrs. Charu Ramanathan',
						subtitle: 'Co-Founder at CardioInsight, Lokyata, Vitalxchange'
					}
				},
				{
					title: 'Artificial Intelligence in Healthcare',
					desc: 'Diagnostics and healthcare is all set to be revolutionised by artificial intelligence. This session will include current patterns of research in AI and its related applications in different areas of medicine and healthcare.',
					img: Rajesh,
					imgInfo: {
						title: 'Mr. Rajaneesh R Kini',
						subtitle: 'Vice President, Aricent.'
					}
				},
				{
					title: 'Affordable medical devices for India',
					desc: 'Access to healthcare is improving in India because of the rapid growth of private healthcare providers and an increase in expenditure by the central and state governments on the provision of healthcare.',
					img: Jaydeep,
					imgInfo: {
						title: 'Mr. Jayadeep Unni',
						subtitle: 'Founder, Sensivision Health Technologies'
					}
				}

			]
		}
	}

	componentDidMount(){
		document.title = 'Excel 2018 - Becon 18'
	}

	render(){

		let paperPresentationTopics = this.state.topics.map((topic,i) => (
			<li>
				<h4>{topic.title}</h4>
				<p>{topic.desc}</p>
			</li>
			))

		return(
			<div className={styles['event-details-container']}>
				<div className={styles['event-header']}>
					<div className={styles['event-logo']}>
						<img src={beconBrain}/>
					</div>
					<div className={styles['event-name']}>
						{/*<h2>{this.state.eventName}</h2>*/}
						<img src={beconLogo}/>	

					</div>
					<div className={styles['event-theme']}>
						National biomedical conference
					</div>
					<div className={styles['event-date']}>
						<h3><FaIcon name="calendar-alt"/> {this.state.eventDate}</h3>
					</div>
					<div className={styles['event-venue']}>
						<h3><FaIcon name="map-marker-alt"/>
							<a href={`https://www.google.com/maps/?q=${this.state.eventVenue.coords.join()}`}>{this.state.eventVenue.name}</a>
						</h3>
					</div>
				</div>
				<p className={styles['event-desc']}>
				Continuous technological developments in healthcare have saved countless lives and improved the quality of life for even more. Not only has technology changed experiences for patients and their families, but it’s also had a huge impact on medical processes and the practices of healthcare professionals. Becon 18 aims to showcase the best and latest technological advancements in the field of healthcare by conducting a one-day health conferencewith sessions covering the significance of medical technology and bioinformatics for healthcare. Students will be invited to submit abstracts, and the top 5 entries present their research papers to the judges in a paper presentation competition.
				</p>
				<h2 className={styles['section-title']}>Sessions</h2>
				<div className={styles['event-cards']}>
					<HCards cards={this.state.cards}/>
				</div>
				<h2 className={styles['section-title']}>Paper Presentation</h2>
				<p className={styles['event-desc']}>
				Paper presentation session will include students presenting their research papers before a panel of judges based on the problem statements given to them. The best five entries from the submitted abstracts will be presented before the audience.
				</p>
				<h4 className={styles['event-prize']}>
					Prizes worth 10k
				</h4>
				<h2 className={styles['section-title']}>Topics</h2>
				<ol className={styles['event-desc']}>
					{paperPresentationTopics}
				</ol>
				<p className={styles['event-desc']}>
					Entries are not limited to these topics.
				</p>
				<br/>
				<br/>
				<br/>
				<div className={styles['event-action']}>
					<div className={styles['event-action-btn-left']}>
						<a href="https://www.yepdesk.com/open-register/5b20bb74e4b0a8f119059fbc" target="_blank">Register</a>
					</div>
					<div className={styles['event-action-btn-right']}>
						<a href="https://docs.google.com/forms/d/1qq-eNuCL8WPwUrdRL2Q_bC4hhoAySii_HOuXACy3iLY">submit abstract</a>
					</div>
				</div>
			</div>
			);
	}
}