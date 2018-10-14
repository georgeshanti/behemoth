import React, {Component} from 'react';
import styles from './style.module.css';
import { Route, Link } from 'react-router-dom'
import EventGridCard from 'components/event-grid-card'
import EventCard from 'components/event-card'
import axios from 'axios'
export default class Events extends Component{

    constructor(props){
        super(props)
        this.state={
            cardInfo:[]
        }
    }

    componentWillMount(){
		var comp = this;
		axios.get("https://cms.excelmec.org/event/")
			.then(function (response) {
				comp.setState({cardInfo: response.data})
            })
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        var grid1 = []
        var grid2 = []
        var colors=['powderblue','thistle','palegreen','lavender', 'lightsalmon'] //to change add colors in event cards too
		for(var i in this.state.cardInfo){
            var gridbg=colors[i%4]
			var gridItem = (
                <Link key={i} to={"/events/"+this.state.cardInfo[i].codename} style={{textDecoration:'none'}}>
                    <EventGridCard details={this.state.cardInfo[i]} delay={i*100} colors={gridbg} />
                </Link>)
            if((i%2)===0)
               grid1.push(gridItem)
            else
               grid2.push(gridItem)   
		}
        return(
            <div>
                <div>
                    <header><h1 className={styles['title']}>EVENTS</h1></header>

                    <div id="grid">
                        <div className={styles["left"]}>
                            {grid1}
                        </div>
                        <div className={styles["right"]}>
                            {grid2}
                        </div>
                    </div>
                </div>
				<Route path='/events/:event' component={EventCard}/>
            </div>
        )
    }
}