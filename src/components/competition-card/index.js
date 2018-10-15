import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './style.module.css';
import axios from 'axios'
import { SSL_OP_NETSCAPE_CA_DN_BUG } from 'constants';

class CompetitionCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            tabIndex: 0,
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
                contact: "",
                buttons: []
            }
        }
        this.close = this.close.bind(this)
        this.xScrollWidth = 0
        this.changeTab = this.changeTab.bind(this)
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

    changeTab = (i) => (e) => {
        this.setState({tabIndex: i})
    }

    componentWillMount(){
        var comp = this;
        axios.get("https://cms.excelmec.org/competition/")
			.then(function (response) {
                var data = response.data
                for(var i in data){
                    if(data[i].codename === comp.props.match.params['competition']){
                        axios.get("https://cms.excelmec.org/competition/"+data[i].id)
                        .then(function (json) {
                            comp.setState({eventContent: json.data})
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
        var contacts = []
        var buttons = []
        for( var i in content.buttons){
            var con = content.buttons[i]
            var button = (
                <a href={con.link} className={styles['button']}>{con.name}</a>
            )
            buttons.push(button)
        }

        for( var i in content.contactInfo){
            var con = content.contactInfo[i]
            var contact = (
                <div>
                    <div style={{display:"inline-block", textAlign:"left"}}>
                        <p><b>{con.name}</b></p>
                        <p><i class="fas fa-user-alt"></i> {con.designation}</p>
                        <p><a href={"tel:"+con.phone} style={{textDecoration: "none", color: "white"}}><i class="fas fa-phone"></i> {con.phone}</a></p>
                    </div>
                </div>)
            contacts.push(contact)
        }
        var index = parseInt(this.state.tabIndex)
        console.log(index)
        var height = ['0px', '0px', '0px', '0px']
        height[index] = 'unset'
        var scrollDistance = index * 100
        if(!this.state.mounted){
            window.history.back()
        }
            // return <Redirect to='/competitions' push/>
        return (
            <div id='contentsContainer' className={styles["events--expanded"]} style={{opacity: this.state.opacity}}>
                <div id='event-content' className={styles["event-bg"]}>
                    <div ref="test" className={styles["card"]}>
                        <div id='contents-close' className={styles["btn-close"]} onClick={this.close.bind(this)}><img  alt='' src={require('../../img/close.png')}/></div>
                            <div className={styles["card-content"]}>
                                <div className={styles["competition-heading"]}>
                                    <div className={styles["img-container"]}>
                                        <img alt={content.name} class={styles["competition-img"]} src={content.img} />
                                    </div>
                                    <div className={styles["heading-text-container"]}>
                                        <div className={styles["heading-font"]}>{content.name}</div>
                                        <div className={styles["purple-font"]}>Prize Pool - {content.prize}</div>
                                        <div className={styles["purple-font"]}>Registration Fee - {content.registration}</div>
                                        {buttons}
                                    </div>
                                </div>
                                <div className={styles["main-nav-block"]} >
                                    <ul>
                                        <li className={styles["highlight"]} style={{transform: "translate(" + scrollDistance + "%"}}>

                                        </li>
                                            <li><div id="format" onClick={this.changeTab(0)}>About</div></li>
                                            <li><div id="format" onClick={this.changeTab(1)}>Format</div></li>
                                            <li><div id="format" onClick={this.changeTab(2)}>Rules</div></li>
                                            <li><div id="format" onClick={this.changeTab(3)}>Contact</div></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="tab-wrapper" className={styles["tab-wrapper"]}>
                                <div className={styles["tab-content-wrap"]} style={{transform: "translate(-" + scrollDistance + "%"}}>
                                <div id="about-content" className={styles["white-font"] + " " + styles["tab-content"]} style={{height: height[0]}}>
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
                                    dangerouslySetInnerHTML={{__html: content.format}} style={{height: height[1]}}>
                                </div> 
                                <div id="rules-content" className={styles["white-font"] + " " + styles["tab-content"]}
                                    dangerouslySetInnerHTML={{__html: content.rules}} style={{height: height[2]}}>
                                </div>
                                <div id={styles["contact-content"]} className={styles["white-font"] + " " + styles["tab-content"]} style={{height: height[3]}}>
                                    {contacts}
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
