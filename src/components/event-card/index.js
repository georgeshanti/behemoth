import React, { Component } from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class EventCard extends Component{
   
    constructor(props){
        super(props)
        this.state={
            cardInfo:[],
        index:this.props.match.params['eventNo']
        }
        this.colors=['#48413F','#B29F60','#294E8B','#229DEC', '#5E3D28']
        this.divstyle= {
            backgroundColor: this.colors[this.state.index%4],
        };

    }

    componentWillMount(){
        var comp = this;
        axios.get("https://cms.excelmec.org/event/")
			.then(function (response) {
                var data = response.data
                for(var i in data){
                    if(data[i].codename === comp.props.match.params['event']){
                        axios.get("https://cms.excelmec.org/event/"+data[i].id)
                        .then(function (json) {
                            comp.setState({cardInfo: json.data})
                        })
                    }
                }
			})
    }
    
    render(){
        var section2=[]
        for (var i in this.state.cardInfo.imgs)
        {     var item=<img alt={i} src={this.state.cardInfo.imgs[i]}/>
              section2.push(item) 
        }

        return(
            <div className={styles["overlay"]}>
                <div className={styles["container-border"]}>
                    <div id='contents-close' className={styles["btn-close"]}><Link to={"/events"}><img  alt='' src={require('../../img/close.png')}/></Link></div>
                    <div className={styles["container"]} style={this.divstyle}>
                    <div className={styles["sections"]}>
                        
                            <div  className={styles["section1"]}>
                            <h1 id="title">{this.state.cardInfo.name}</h1>
                            {this.state.cardInfo.website &&
                                (<a target="_blank" class={styles["website-link"]} href={this.state.cardInfo.website}>Go to website <i class="fas fa-arrow-right"></i></a>)
                            }
                            <p id="content">{this.state.cardInfo.details}</p>
                            </div>
                            <div className={styles["section2"]}>
                                {section2}
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}