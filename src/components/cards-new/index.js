import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './style.module.css';
import ReactDOM from 'react-dom';

class CardsNew extends Component {

    constructor(props) {
        super(props);
        var index = 0
        this.state = {
            opacity: 0,
            tabIndex: index,
            mounted: true,
            eventContent: {
                department:"Computer Science",
                category:"Online",
                about: {
                    content: "A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough. Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.",
                    date:"7 july",
                    time:"10:30-11:30",
                    venue:"no where?"
                    },
                format: {
                    prelims:"MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.",
                    final:"Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order"
                    },
                rules: "anything ",
                contact: "lorem"
            }
        }
        // this.switchTab=this.switchTab.bind(this)
        this.xScrollWidth = 0
    }

    componentDidMount(){
        this.setState({
            opacity: 1
        })
    }
    
    switchTab(index){
        // console.log('switchTab works')
        // this.setState({
        //     tabIndex: index
        // })
    }

    close(){
        this.setState({
            opacity: 0
        })
        var comp = this
        setTimeout(function(){
            comp.setState({
                mounted: false
            })
        },500)
    }

    render() {
        var closeEvent = null;
        var index = 0;
        switch(this.props.match.params['section']){
            case 'about':
                index = 0
                break;
            case 'format':
                index = 1
                break;
            case 'rules':
                index = 2
                break;
            case 'contact':
                index = 3
                break;
        }
        var scrollDistance = index * 100
        if(!this.state.mounted)
            return <Redirect to='/events' push/>
        return (
            <div id='contentsContainer' className={styles["events--expanded"]} style={{opacity: this.state.opacity}}>
                <div id='event-content' className={styles["event-bg"]}>
                    <div ref="test" className={styles["card"]}>
                        <div id='contents-close' className={styles["btn-close"]} onClick={this.close.bind(this)}><img  alt='' src={require('../../img/close.png')}/></div>
                            <div className={styles["card-content"]}>
                                <div className={styles["heading-font"]}>Heading Event</div>
                                <div className={styles["purple-font"]}>Prize Pool - 25k</div>
                                <br/><br/>
                                <div className={styles["main-nav-block"]} >
                                    <ul>
                                        <li className={styles["highlight"]} style={{transform: "translate(" + scrollDistance + "%"}}>

                                        </li>
                                        <Link to={"/events/event/about"}>
                                            <li><div id="format" >About</div></li>
                                        </Link>
                                        <Link to={"/events/event/format"}>
                                            <li><div id="format" >Format</div></li>
                                        </Link>
                                        <Link to={"/events/event/rules"}>
                                            <li><div id="format" >Rules</div></li>
                                        </Link>
                                        <Link to={"/events/event/contact"}>
                                            <li><div id="format" >Contact</div></li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div id="tab-wrapper" className={styles["tab-wrapper"]}>
                                <div className={styles["tab-content-wrap"]} style={{transform: "translate(-" + scrollDistance + "%"}}>
                                    <div id="about-content" className={styles["white-font"] + " " + styles["tab-content"]}>
                                    <p>{this.state.eventContent.about.content}</p>
                                    <div className={styles["mini-grid"]}>
                                        <ul>
                                            <li className={styles["mini-grid-item"]}>
                                                <h4 className={styles["purple-font"]}>Date</h4>
                                                <p className={styles["white-font"]}>{this.state.eventContent.about.date}</p>
                                            </li>
                                            <li className={styles["mini-grid-item"]}>
                                                <h4 className={styles["purple-font"]}>Time</h4>
                                                <p className={styles["white-font"]}>{this.state.eventContent.about.time}</p>
                                            </li>
                                            <li className={styles["mini-grid-item"]}>
                                                <h4 className={styles["purple-font"]}>Venue</h4>
                                                <p className={styles["white-font"]}>{this.state.eventContent.about.venue}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="format-content" className={styles["white-font"] + " " + styles["tab-content"]}>
                                    <p><strong>Preliminary Round</strong></p><br/>
                                    <p>{this.state.eventContent.format.prelims}</p><br/><br/>
                                    <p><strong>Final Round</strong></p><br/>
                                    <p>{this.state.eventContent.format.final}</p><br/>
                                    <p>The question will be provided to each member only at the start of their own time slot. Once the question has been provided, each member can code for 5 mins initially, then the time slots vary to 10mins, 5mins and 10mins again. After one person’s time slot is complete the next person of the team is expected to continue coding from where his teammate had left off. <br/>
                                    Duration for the final round is 120 minutes in total.<br/>
                                    The teams that gets the desired output in the shortest time stand a chance to win the prize money.</p><br/>
                                </div> 
                                <div id="rules-content" className={styles["white-font"] + " " + styles["tab-content"]}>
                                    <strong>Team Formation:</strong>
                                    <p>1. A team can have a maximum of 3 members</p><br/>
                                    <p>2. A participant cannot be part of more than one team .</p><br/>
                                    <p>3. It is not necessary that the participants forming a team should be from the same college</p><br/>
                                    <p>4. There is no restriction in the number of teams from the same college .</p><br/>
                                </div>
                                <div id="contact-content" className={styles["white-font"] + " " + styles["tab-content"]}>
                                    <p>
                                        To make CSS modules work with Webpack you only have to include the modules mentioned above and add the following loader to your webpack.config.js file:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

export default CardsNew;
