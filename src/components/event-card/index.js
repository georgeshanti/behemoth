import React, { Component } from 'react';
import styles from './style.module.css';
import { Route, Link } from 'react-router-dom'

export default class EventCard extends Component{
   
    constructor(props){
        super(props)
        this.state={
            cardInfo:[{
                name:"HackForTomorrow",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec"
            },
            {   name:"Event 2",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec"
            },
            {   name:"Event 3",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec"
            },
            {   name:"Event 4",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec"
            },
            {   name:"Event 5",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec"
            }
        ],
        index:this.props.match.params['eventNo']
        }
        this.colors=['pink','skyblue','palegreen','goldenrod']
        this.divstyle= {
            backgroundColor: this.colors[this.props.match.params.eventNo%5],
          };
    }
   
    componentDidMount(){
        console.log(this.props.match.params.eventNo);
    }
    render(){
        return(
            <div className={styles["container"]} style={this.divstyle}>
            <div id='contents-close' className={styles["btn-close"]}><Link to={"/events"}><img  alt='' src={require('../../img/close.png')}/></Link></div>
               <div className={styles["sections"]}>
                
                    <div className={styles["section1"]}>
                    <h1>{this.state.cardInfo[this.state.index].name}</h1>
                    <p>{this.state.cardInfo[this.state.index].content}</p>
                    </div>
                    
                    <div className={styles["section2"]}>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                    </div>
               </div>
            </div>
        )
    }
}