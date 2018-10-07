import React, { Component } from 'react';
import styles from './style.module.css';
import { Route, Link } from 'react-router-dom'
import {TimelineLite, Power0} from 'gsap'

export default class EventCard extends Component{
   
    constructor(props){
        super(props)
        this.state={
            cardInfo:[{
                name:"HackForTomorrow",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec",
                pictures:["https://placeimg.com/640/480/any","https://placeimg.com/640/480/any","https://placeimg.com/640/480/any","https://placeimg.com/640/480/any"]
               
            },
            {   name:"Event 2",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec",
                pictures:["https://placeimg.com/640/480/any","https://placeimg.com/640/480/any","https://placeimg.com/640/480/any"]      
            },
            {   name:"Event 3",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec",
                pictures:["https://placeimg.com/640/480/any","https://placeimg.com/640/480/any"]
            },
            {   name:"Event 4",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec",
                pictures:["https://placeimg.com/640/480/any","https://placeimg.com/640/480/any","https://placeimg.com/640/480/any","https://placeimg.com/640/480/any","https://placeimg.com/640/480/any","https://placeimg.com/640/480/any"]
            },
            {   name:"Event 5",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec",
                pictures:["https://placeimg.com/640/480/any","https://placeimg.com/640/480/any","https://placeimg.com/640/480/any","https://placeimg.com/640/480/any"]
            }
        ],
        index:this.props.match.params['eventNo']
        }
        this.colors=['#48413F','#B29F60','#294E8B','#229DEC', '#5E3D28']
        this.divstyle= {
            backgroundColor: this.colors[this.state.index%4],
        };

        this.tl = new TimelineLite();

    }

   
    componentDidMount(){
        window.scrollTo(0, 0)
        
        //Animation for event card
        var title = document.getElementById('title')
        var content=document.getElementById('content')
        this.tl.fromTo(title, .75, { x:-400 ,autoAlpha: 0}, { x:0, autoAlpha: 1, ease: Power0.easeIn}) 
        this.tl.fromTo(content, 1.5, { autoAlpha: 0}, { autoAlpha: 1, ease: Power0.easeIn},'-=1')
    }
    
    render(){
        var section2=[]
        for (var i=0;i<this.state.cardInfo[this.state.index].pictures.length;i++)
        {     var item=<img src={this.state.cardInfo[this.state.index].pictures[i]}/>
              section2.push(item) 
        }

        return(
            <div>
            <div className={styles["container-border"]}>
                <div id='contents-close' className={styles["btn-close"]}><Link to={"/events"}><img  alt='' src={require('../../img/close.png')}/></Link></div>
            </div>
            <div className={styles["container"]} style={this.divstyle}>
               <div className={styles["sections"]}>
                
                    <div  className={styles["section1"]}>
                    <h1 id="title">{this.state.cardInfo[this.state.index].name}</h1>
                    <p id="content">{this.state.cardInfo[this.state.index].content}</p>
                    </div>
                    <div className={styles["section2"]}>
                        {section2}
                    </div>
               </div>
            </div>
            </div>
        )
    }
}