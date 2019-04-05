import React, { Component } from 'react';
import styles from './style.module.css';
import axios from 'axios';
import scheduleData from './schedule-data.json'

class ScheduleGridCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            opacity: 0,
            scale: 0,
            cardInfo: scheduleData[this.props.details]
        }
    }

    /* Not required any more as we are loading the data from local file
    componentWillMount(){
		var comp = this;
		axios.get("https://cms.excelmec.org/"+this.props.details+"/")
			.then(function (response) {
                comp.setState({cardInfo: response.data})
            })
    }
    */

    componentDidMount(){
        var comp = this
        setTimeout(function(){
            comp.setState({
                opacity: 1,
                scale: 1
            })
            }
        ,this.props.delay);
    }

    render(){
        var contents=[]

        var y=this.state.cardInfo
        var style
        y.sort(function(a,b){
            return a.start - b.start
        })
        for(var  i in y){

            if(this.props.department!=0 && this.props.departments[this.props.department]!=y[i].department)
                continue
            
            var style = (i===y.length - 1)?{borderWidth: "0px"}:{}
            var time

            time = y[i].start>=12?" PM":" AM"
            // console.log(y[i].start)
            var start = y[i].start%12
            start = parseFloat(start)
            if(start<1){
                start+=12
            }
            start = (start).toFixed(2).toString().replace(".",":") + time

            time = y[i].end>=12?" PM":" AM"
            var end = y[i].end%12
            end = parseFloat(end)
            if(end<1){
                end+=12
            }
            end = (end).toFixed(2) + time

            var x=(
                    <div key={i}>
                        <div className={styles['schedule-sub-grid']} style={style}>
                            <div className={styles['schedule-time']}>{start}<br/>{end}</div>
                            <div className={styles['schedule-sub-title']}>
                                {y[i].name}
                                <div className={styles['schedule-sub-category']}>{y[i].department}
                                    <div className={styles['schedule-venue']}>{y[i].venue}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            contents.push(x)
        }

        return (
            <div className={styles['schedule-grid-item']} style={{  opacity: this.state.opacity, transform: "scale(" + this.state.scale + ")"}}>  
                <div className={styles['schedule-grid-overlay']} >
                    <span className={styles['schedule-title']}>{this.props.day}</span>
                    <div className={styles['contents-container']}>
                        {contents}
                    </div>
                </div>
            </div>
        );
    }
}

export default ScheduleGridCard