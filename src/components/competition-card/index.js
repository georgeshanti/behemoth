import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './style.module.css';
import ReactDOM from 'react-dom';

class CompetitionCard extends Component {

    constructor(props) {
        super(props);
        var index = 0
        this.state = {
            opacity: 0,
            tabIndex: index,
            mounted: true,
            eventContent: {
                name:"Loading...",
                category:"",
                about: "",
                date:"--",
                time:"--",
                venue:"--",
                format: "",
                rules: "",
                contact: ""
            }
        }
        this.close = this.close.bind(this)
        this.xScrollWidth = 0
    }

    componentDidMount(){
        var comp = this
        setTimeout(function(){
            comp.setState({
                opacity: 1
            })
            }
        ,this.props.delay);
    }

    componentWillMount(){
        var comp = this;
		fetch("http://cms.excelmec.org:8080/competition/")
        .then(response => response.json())
        .then((data) => {
            for(var i in data){
                console.log(data[i].codename + " " + this.props.match.params['competition'])
                if(data[i].codename == this.props.match.params['competition']){
                    console.log("match")
                    fetch("http://cms.excelmec.org:8080/competition/"+data[i].id)
                    .then(response => response.json())
                    .then((data) => {
                        comp.setState({eventContent: data})
                    })
                }
            }
        })
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
        var content = this.state.eventContent
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
            return <Redirect to='/competitions' push/>
        return (
            <div id='contentsContainer' className={styles["events--expanded"]} style={{opacity: this.state.opacity}}>
                <div id='event-content' className={styles["event-bg"]}>
                    <div ref="test" className={styles["card"]}>
                        <div id='contents-close' className={styles["btn-close"]} onClick={this.close.bind(this)}><img  alt='' src={require('../../img/close.png')}/></div>
                            <div className={styles["card-content"]}>
                                <div className={styles["competition-heading"]}>
                                    <div className={styles["img-container"]}>
                                        <img class={styles["competition-img"]} src={content.img} />
                                    </div>
                                    <div className={styles["heading-text-container"]}>
                                        <div className={styles["heading-font"]}>{content.name}</div>
                                        <div className={styles["purple-font"]}>Prize Pool - {content.prize}</div>
                                    </div>
                                </div>
                                <div className={styles["main-nav-block"]} >
                                    <ul>
                                        <li className={styles["highlight"]} style={{transform: "translate(" + scrollDistance + "%"}}>

                                        </li>
                                        <Link to={"/competitions/" + this.props.match.params['competition'] + "/about"}>
                                            <li><div id="format" >About</div></li>
                                        </Link>
                                        <Link to={"/competitions/" + this.props.match.params['competition'] + "/format"}>
                                            <li><div id="format" >Format</div></li>
                                        </Link>
                                        <Link to={"/competitions/" + this.props.match.params['competition'] + "/rules"}>
                                            <li><div id="format" >Rules</div></li>
                                        </Link>
                                        <Link to={"/competitions/" + this.props.match.params['competition'] + "/contact"}>
                                            <li><div id="format" >Contact</div></li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div id="tab-wrapper" className={styles["tab-wrapper"]}>
                                <div className={styles["tab-content-wrap"]} style={{transform: "translate(-" + scrollDistance + "%"}}>
                                    <div id="about-content" className={styles["white-font"] + " " + styles["tab-content"]}>
                                    <p dangerouslySetInnerHTML={{__html: content.about}}></p>
                                    <div className={styles["mini-grid"]}>
                                        <ul>
                                            <li className={styles["mini-grid-item"]}>
                                                <h4 className={styles["purple-font"]}>Date</h4>
                                                <p className={styles["white-font"]}>{content.date}</p>
                                            </li>
                                            <li className={styles["mini-grid-item"]}>
                                                <h4 className={styles["purple-font"]}>Time</h4>
                                                <p className={styles["white-font"]}>{content.time}</p>
                                            </li>
                                            <li className={styles["mini-grid-item"]}>
                                                <h4 className={styles["purple-font"]}>Venue</h4>
                                                <p className={styles["white-font"]}>{content.venue}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="format-content" className={styles["white-font"] + " " + styles["tab-content"]}
                                    dangerouslySetInnerHTML={{__html: content.format}}>
                                </div> 
                                <div id="rules-content" className={styles["white-font"] + " " + styles["tab-content"]}
                                    dangerouslySetInnerHTML={{__html: content.rules}}>
                                </div>
                                <div id={styles["contact-content"]} className={styles["white-font"] + " " + styles["tab-content"]}
                                    dangerouslySetInnerHTML={{__html: content.contact}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompetitionCard;
