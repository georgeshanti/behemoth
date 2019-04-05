import React, {Component} from 'react';
import styles from './style.module.css';
import { Route, Link } from 'react-router-dom'
import EventGridCard from 'components/event-grid-card'
import EventCard from 'components/event-card'
import axios from 'axios'
import eventsData from './events-data.json'

export default class Events extends Component{
    constructor(props){
        super(props)
        this.state={
            cardInfo: eventsData
        }
    }

    /*Not required any more as we are loading the data from local file
    componentWillMount(){
		var comp = this;
		axios.get("https://cms.excelmec.org/event/")
			.then(function (response) {
				comp.setState({cardInfo: response.data})
            })
    }
    */

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        var grid1 = []
        var grid2 = []
        var grid3 = []
        var colors=['powderblue','thistle','palegreen','lavender', 'lightsalmon'] //to change add colors in event cards too
        var cardInfo = this.state.cardInfo
		for(var i in cardInfo){
            var gridbg=colors[i%4]
			var gridItem = (
                <Link key={i} to={"/events/"+cardInfo[i].codename} style={{textDecoration:'none'}}>
                    <EventGridCard details={cardInfo[i]} delay={i*100} colors={gridbg} />
                </Link>)
            if((i%3)===0)
                grid1.push(gridItem)
            else if((i%3)===1)
                grid2.push(gridItem)
            else
                grid3.push(gridItem)
		}
        return(
            <div style={{height: "100vh", overflow: "auto"}}>
                <header><h1 className={styles['title']}>EVENTS</h1></header>

                <div id={styles["grid"]}>
                    <div className={styles["left"]}>
                        {grid1}
                    </div>
                    <div className={styles["right"]}>
                        {grid2}
                    </div>
                    <div className={styles["left"]}>
                        {grid3}
                    </div>
                </div>
				<Route path='/events/:event' component={EventCard}/>
            </div>
        )
    }
}