import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Countdown from 'components/countdown';
import FindOut from 'components/find-out'
import './animation.scss';
import './style.css';
import boschlogo from './images/bosch.png';
import nestlogo from './images/nest_logo.png';
import meclogo from './images/college below white.png';
import excellogo from './images/logo_text_1.png';
import axios from 'axios';

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = []
    }

    touchstart = (e) => {
        this.clips.style.opacity = 1;
    }

    touchend = (e) => {
        this.clips.style.opacity = 0;
    }

    moveContents = (contents) => {
        for(var i = 0; i < contents.length; i++){
            var translateX = Math.max(Math.min((this.mouseX - contents[i].offsetLeft - contents[i].offsetWidth/2) / 30, 3), -3);
            var translateY = Math.max(Math.min((this.mouseY - contents[i].offsetTop - contents[i].offsetHeight/2) / 30, 5), -5);
            contents[i].style.transform = "scale(1.01) translateY(" + translateY + "px) translateX(" + translateX + "px)";
        }
    }

    resetContents = (contents) => {
        for(var i = 0; i < contents.length; i++){
            contents[i].style.transform = "scale(1) translateY(0px) translateX(0px)";
        }
    }

    leftmove = (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.moveContents(this.left_contents);
    }

    leftout = (e) => {
        this.resetContents(this.left_contents);
    }

    rightmove = (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.right_contents_schedule_button[0].style.transform = "scale(1.01)";
        this.moveContents(this.right_contents);
    }

    rightout = (e) => {
        this.right_contents_schedule_button[0].style.transform = "scale(1)";
        this.resetContents(this.right_contents);
    }

    componentWillMount(){
		var comp = this;
		axios.get("https://cms.excelmec.org/newsfeed/")
			.then(function (response) {
                comp.setState({newsfeed: response.data})
            })
    }

    componentDidMount(){
        this.clips = document.querySelector(".clips");

        // Animation played only when hovered upon or touched
        this.clips.addEventListener('touchstart', this.touchstart, false);
        this.clips.addEventListener('touchend', this.touchend, false);

        // Animation on hover for right and left contents
        this.left_content = document.querySelector(".left-content");
        this.left_contents = document.querySelectorAll(".left-content>*");
        this.right_content = document.querySelector(".right-content");
        this.right_contents = Array.from(document.querySelectorAll(".right-content>*"));
        this.right_contents_schedule_button = this.right_contents.splice(0,1);
        this.mouseX = 0
        this.mouseY = 0;

        this.left_content.addEventListener('mousemove', this.leftmove, false);
        this.left_content.addEventListener('mouseout', this.leftout, false);
        this.right_content.addEventListener('mousemove', this.rightmove, false);
        this.right_content.addEventListener('mouseout', this.rightout, false);
    }

    componentWillUnmount(){
        this.clips.removeEventListener('touchstart', this.touchstart, false);
        this.clips.removeEventListener('touchend', this.touchend, false);
        this.left_content.removeEventListener('mousemove', this.leftmove, false);
        this.left_content.removeEventListener('mouseout', this.leftout, false);
        this.right_content.removeEventListener('mousemove', this.rightmove, false);
        this.right_content.removeEventListener('mouseout', this.rightout, false);
    }

	render(){
        var newsfeed = []
        for( var i in this.state.newsfeed){
            var feed = (

                <div className="news-container">
                    <div className="block"></div>
                    <span className="date">{this.state.newsfeed[i].date}</span>
                    <a className="headline" href={this.state.newsfeed[i].link} target="_blank">{this.state.newsfeed[i].title}</a>
                </div>
            )
            newsfeed.push(feed)
        }
		return (
            <div className="content-wrapper">
                

                <div className="logo-anim">
                    <div className="clips">
                        <div id="clip3" className="clip"></div>
                        <div id="clip4" className="clip"></div>
                        <div id="clipa" className="clip"></div>
                        <div id="clip1" className="clip"></div>
                        <div id="clip2" className="clip"></div>
                        <div id="clipb" className="clip"></div>
                    </div>
                    <div className="space"></div>
                    <div className="background">
                        <img src={excellogo}/>
                        <svg viewBox="13 13 26 26">
                            <circle id="edge" cx="0" cy="0" r="12.5" stroke="#000000" fill="none" stroke-width="1"/>
                        </svg>
                    </div>
                    <div className="countdown">
                        <Countdown date={(new Date(2018, 10, 2))} />
                    </div>
                </div>

                <div className="sponsors">
                    <div className="sponsor">
                        <span>Title Sponsor</span>
                        <a href="http://nesttech.com/" target="_blank"><img src={nestlogo} style={{width: "60%"}}/></a>
                    </div>
                    <div className="sponsor">
                        <span>Associate Sponsor</span>
                        <a href="https://www.bosch.in/" target="_blank"><img src={boschlogo} style={{marginTop: "11%"}}/></a>
                    </div>
                </div>
                <div className="curtain">
                    <div className="down box">
                        <div className="diamond" style={{
                        width: "35vw",
                        height: "35vw",
                        top: "10vw",
                        left: "60vw",
                        }}></div>
                        <div className="circle" style={{
                        width: "15vw",
                        height: "15vw",
                        top: "75vw",
                        left: "20vw"
                        }}></div>
                        <div className="diamond" style={{
                        width: "8vw",
                        height: "8vw",
                        top: "5vw",
                        left: "10vw"
                        }}></div>
                        <div className="diamond" style={{
                        width: "10vw",
                        height: "10vw",
                        top: "95vw",
                        left: "80vw"
                        }}></div>
                        <div className="square" style={{
                        width: "10vw",
                        height: "10vw",
                        top: "65vw",
                        left: "60vw"
                        }}></div>
                        <div className="square" style={{
                        width: "20vw",
                        height: "15vw",
                        top: "37vw",
                        left: "-2vw"
                        }}></div>
                        <div className="diamond" style={{
                        width: "40vw",
                        height: "40vw",
                        top: "120vw",
                        left: "10vw",
                        }}></div>
                        <div className="circle" style={{
                        width: "10vw",
                        height: "10vw",
                        top: "130vw",
                        left: "90vw"
                        }}></div>
                        <div className="circle" style={{
                        width: "50vw",
                        height: "50vw",
                        top: "160vw",
                        left: "50vw"
                        }}></div>
                        <div className="square" style={{
                        width: "10vw",
                        height: "10vw",
                        top: "180vw",
                        left: "5vw"
                        }}></div>
                    </div>
                </div>


                <div className="container">
                    <div className="left-container">
                        <div className="left-content content-container">
                            <div className="find-out">
                                <Link to="/find-out" style={{textDecoration: "none", color: "inherit"}}>
                                    <span className="slide-top-anim slide-up">Find out &nbsp;&#8594;</span>
                                    <p>More about Excel.</p>
                                </Link>
                            </div>
                            <div className="tagline">
                                <span className="inspire"><i class="fas fa-fire"></i>Inspire.</span>
                                <span className="innovate"><i class="fas fa-lightbulb"></i>Innovate.</span>
                                <span className="engineer"><i class="fas fa-rocket" style={{fontSize: "0.7em", margin:"0px 12px"}}></i>Engineer.</span>
                                {/* <span className="inspire">Inspire.</span>
                                <span className="innovate">Innovate.</span>
                                <span className="engineer">Engineer.</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="right-content content-container">
                            <div className="quick-buttons">
                                <Link to="/schedule" style={{textDecoration: "none"}}><span className="schedule button slide-top-anim">Schedule</span></Link>
                            </div>
                            <div className="news-feed">
                                {newsfeed}
                            </div>
                        </div>
                    </div>
                    <div className="content-container float-buttons">
                        <div className="excel-website-container">
                            <a href="http://mec.ac.in" target="_blank"><img src={meclogo}/>
                                {/* <span>Govt. Model<br/>Engineering<br/>College, Thrikakkara</span> */}
                            </a>
                            {/* <a href="https://excelmec.org/excel2017" target="_blank"><img src={excel2017}/></a>
                            <a href="https://excelmec.org/excel2016" target="_blank"><img src={excel2016}/></a>
                            <a href="https://excelmec.org/excel2015" target="_blank"><img src={excel2015}/></a> */}
                        </div>
                        <div className="social-container">
                            <a href="https://www.facebook.com/excelmec/" target="_blank"><i class="fab fa-facebook-square" style={{fontSize: "1.2em"}}></i></a>
                            <a href="https://www.instagram.com/excelmec/" target="_blank"><i class="fab fa-instagram" style={{fontSize: "1.2em"}}></i></a>
                            <a href="https://www.youtube.com/user/excelmec/" target="_blank"><i class="fab fa-youtube"></i></a>
                            <a href="https://www.twitter.com/excelmec/" target="_blank"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>

                <div className="mobile">
                    <div class="left-container">
                        <div className="content-container left">
                            <Link to="/schedule"><a className="schedule button">Schedule</a></Link>
                        </div>
                    </div>
                    <div class="right-container">
                        <div className="content-container right">
                            <Link to="/events"><a className="events button">Events</a></Link>
                        </div>
                    </div>
                </div>

                {/* <!-- Fake Menu Button --> */}
                {/* <div className="fb-button"><span></span></div> */}
				<Route path='/find-out' component={FindOut}/>
                <script src="js/main.js"></script>
            </div>
		)
	}
}
