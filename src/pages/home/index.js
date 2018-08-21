import React, {Component} from 'react';
import styles from './style.module.css';
import './line-logo.css';
import excel2014 from './excel-logos/excel2014.png';
import excel2015 from './excel-logos/excel2015.png';
import excel2016 from './excel-logos/excel2016.png';
import excel2017 from './excel-logos/excel2017.png';
import excel2018 from './excel-logos/excel2018.png';
import endLine from './end-frame/Line.svg';

export default class Events extends Component {

	constructor(props) {
        super(props)
        this.state = {
            slide: 0
        }
        this.slides = 5;
        this.nextSlide = this.nextSlide.bind(this)
        this.scroll = this.scroll.bind(this)
        this.timeline = [
                        {
                            title: "Excel 2014",
                            img: excel2014,
                            desc: "A New Era Begins",
                            color: "#35d1a3"
                        },
                        {
                            title: "Excel 2015",
                            img: excel2015,
                            desc: "Autumn is Coming",
                            color: "#bd3f00"
                        },
                        {
                            title: "Excel 2016",
                            img: excel2016,
                            desc: "Ignite The Spark",
                            color: "#ffffff"
                        },
                        {
                            title: "Excel 2017",
                            img: excel2017,
                            desc: "Redifing Lines",
                            color: "#8f368f"
                        },
                        {
                            title: "Excel 2018",
                            img: excel2018,
                            desc: "Bridging Realms",
                            color: "#326380"
                        }]
        console.log(this.timeline)
        this.time = 0
        this.timelineCanvasHeight = 1000
        this.timelineWidth = 800

        this.timelineLines = []
        var timelineHeight = 1000
        var events = this.timeline.length
        var singleLength = timelineHeight / events
        var lineDrawTime = 0.5
        var circleDrawTime = 0.5
        var textDrawTime = 0.5
        var odd = 1
        var imgOffsetX = 30
        var imgOffsetY = 50
        var textOffsetX = 150
        var titleOffsetY = -7
        var descOffsetY = 30
        for( var i in this.timeline ){
            var start =  (events - i) * singleLength + 100
            var end = (events - i -1) * singleLength + 100
            var lineDelay = i*(lineDrawTime + textDrawTime)
            var circleDelay = lineDelay
            var textDelay = circleDelay + textDrawTime
            console.log(lineDelay, circleDelay)
            var timelineEvent = (
                    <svg key={i}>
                        <line class="st1 timelineLine" x1="400" y1={start} x2="400" y2={end} style={{strokeDasharray: singleLength, strokeDashoffset:singleLength, animationDuration: lineDrawTime+"s", animationDelay: lineDelay+"s"}}/>
                        <circle class={styles["border"]} style={{transform: "translateY(" + singleLength + "px)", animationDuration: circleDrawTime+"s", animationDelay: circleDelay+"s", transformOrigin: "400px " + end + "px"}} cx="400" cy={end} r="13" strokeWidth={2}/>
                        <circle class={styles["dot"]} style={{transform: "translateY(" + singleLength + "px)", animationDuration: circleDrawTime+"s", animationDelay: circleDelay+"s", transformOrigin: "400px " + end + "px"}} cx="400" cy={end} r="10" strokeWidth={1}/>
                        {odd==1 &&
                            (<g className={styles["odd"]} style={{fill: this.timeline[i].color, animationDuration: textDrawTime+"s", animationDelay: textDelay+"s", transformOrigin: "400px " + end + "px"}} >
                                <image xlinkHref={this.timeline[i].img} x={400 + imgOffsetX} y={end - imgOffsetY} height="100px" width="100px"/>
                                <text className={styles["timeline-title"]} textAnchor="start" x={400+textOffsetX} y={end + titleOffsetY} style={{transform:"translateX(0%)"}}>{this.timeline[i].title}</text>
                                <text className={styles["timeline-desc"]} textAnchor="start" x={400+textOffsetX} y={end + descOffsetY}>{this.timeline[i].desc}</text>
                            </g>)
                        }
                        {odd==-1 &&
                            (<g className={styles["even"]} style={{fill: this.timeline[i].color, animationDuration: textDrawTime+"s", animationDelay: textDelay+"s", transformOrigin: "400px " + end + "px"}} >
                                <image xlinkHref={this.timeline[i].img} x={400 - imgOffsetX - 100} y={end - imgOffsetY} height="100px" width="100px"/>
                                <text className={styles["timeline-title"]} textAnchor="end" x={400-textOffsetX} y={end + titleOffsetY} style={{transform:"translateX(0%)"}}>{this.timeline[i].title}</text>
                                <text className={styles["timeline-desc"]} textAnchor="end" x={400-textOffsetX} y={end + descOffsetY}>{this.timeline[i].desc}</text>
                            </g>)
                        }
                    </svg>
            )
            odd *= -1
            this.timelineLines.push(timelineEvent)
        }

    }

    componentDidMount(){
        this.time = (new Date()).getSeconds()
        console.log(this.time)
    }

    nextSlide() {
        var newSlide = ( this.state.slide + 1 ) % this.slides
        this.setState({
            slide: newSlide
        })
    }

    scroll(e){
        console.log(e)
    }

	render() {
        var slideClasses = []

        for( var i=0 ; i<this.slides ; i++){
            if(i<this.state.slide)
                slideClasses.push("past")
            else if(i==this.state.slide)
                slideClasses.push("present")
            else
                slideClasses.push("future")
        }
		return (
            <div className={styles['slide']} onScrollCapture={this.nextSlide}>
                <div className={styles['slide']} style={{position: "absolute"}}>
                    <div className={styles[slideClasses[1]] + " " + styles['line-logo-container']}>
                        <svg version="1.1" x="0px" y="0px" viewBox="0 0 700 700" style={{enableBackground:"new 0 0 700 700"}}>
                            <g id="Lines">
                                <polyline id="Right_Walls" class="st1" points="552,519 552,471 563,456 563,381 532,364 532,331 542,331 568,302 568,257 532,237 
                                    444,254 418,210 354.3,202 	"/>
                                <polyline id="Left_Walls" class="st1" points="157,519 157,471 146,456 146,381 177,364 177,331 167,331 141,302 141,257 177,237 
                                    265,254 291,210 354.3,202 	"/>
                                <polyline id="Right_balcony_1" class="st1" points="356.3,404 477,414.3 520.3,436.3 520.3,466 470,438.1 356.3,428.3 	"/>
                                <polyline id="Left_balcony_1_1_" class="st1" points="357.3,404 235.7,414.3 192.3,436.3 192.3,466 242.6,438.1 357.3,428.3 	"/>
                                <polyline id="Right_balcony_2" class="st1" points="356.3,323.9 486,338.3 520.3,366.3 520.3,398.9 470,368 356.3,360.2 	"/>
                                <polyline id="Left_balcony_2" class="st1" points="357.3,323.9 226.7,338.3 192.3,366.3 192.3,398.9 242.6,368 357.3,360.2 	"/>
                                <polyline id="Right_balcony_3.5" class="st2" points="490,312.4 473.1,300.3 356.3,287.6 	"/>
                                <polyline id="Right_balcony_3" class="st1" points="356.3,265.3 486,279.6 517.3,301.6 520.3,324.3 	"/>
                                <polyline id="Left_balcony_3.5" class="st2" points="217.6,311.4 236.4,300.2 357.3,287.6 	"/>
                                <polyline id="Left_balcony_3" class="st1" points="357.3,265.3 226.7,279.6 195.3,301.6 192.3,324.3 	"/>
                                <line id="Left_window_4" class="st2" x1="142.3" y1="261" x2="47" y2="299.7"/>
                                <line id="Left_window_3" class="st2" x1="142.3" y1="300" x2="23.5" y2="350"/>
                                <line id="Left_window_2" class="st2" x1="149.5" y1="387" x2="38.5" y2="414"/>
                                <line id="Left_window_1" class="st2" x1="146" y1="454" x2="47" y2="471"/>
                                <line id="Right_window_4" class="st2" x1="569.7" y1="261" x2="665" y2="299.7"/>
                                <line id="Right_window_3" class="st2" x1="569.7" y1="300" x2="688.5" y2="350"/>
                                <line id="Right_window_2" class="st2" x1="562.5" y1="387" x2="673.5" y2="414"/>
                                <line id="Right_window_1" class="st2" x1="566" y1="454" x2="665" y2="471"/>
                                <polyline id="Left_panel_1_" class="st1" points="206,241.3 204.3,217 224.3,191 295,210.3 	"/>
                                <polyline id="Right_panel" class="st1" points="501.3,241.3 503,217 483,191 412.3,210.3 	"/>
                                <line id="Right_panel_line" class="st2" x1="479.5" y1="192" x2="477" y2="247.3"/>
                                <line id="Left_panel_line" class="st2" x1="228" y1="192" x2="230.5" y2="247.3"/>
                                <polyline id="Right_roof" class="st2" points="416.3,210 389.1,191 353,185.3 	"/>
                                <polyline id="Left_roof" class="st2" points="291,210 318.3,191 354.3,185.3 	"/>
                                <polyline id="Left_top_2" class="st2" points="265,254 306,222 354.3,215.2 	"/>
                                <polyline id="Right_top_2" class="st2" points="443.3,254 402.3,222 354,215.2 	"/>
                                <line id="Left_top_1" class="st1" x1="276.3" y1="245.2" x2="354.3" y2="233.2"/>
                                <line id="Right_top_1" class="st1" x1="431.3" y1="245.2" x2="353.3" y2="233.2"/>
                            </g>
                        </svg>
                    </div>
                    <div className={styles[slideClasses[2]] + " " + styles['timeline-container']}>
                        <svg viewBox={"0 0 " + this.timelineWidth + " " + (this.timelineCanvasHeight+200)}>
                            {this.timelineLines}
                        </svg>
                    </div>
                    <div className={styles[slideClasses[3]] + " " + styles['logo-container']}>
                        <img className={styles['logo']} src={excel2018} />
                        <svg className={styles['end-line']} x="0px" y="0px"
                            viewBox="0 280 1920 550" style={{enableBackground:"new 0 0 1920 1080"}} xmlSpace="preserve">
                            <path id="XMLID_2_" className={styles["st0"]} d="M87.1,528.1h139.5c11.6,0,21-9.4,21-21V313.6c0-11.6,9.4-21,21-21h3c11.6,0,21,9.4,21,21v429
                                c0,11.6,9.4,21,21,21h4c11.6,0,21-9.4,21-21V549.1c0-11.6,9.4-21,21-21h98c11.6,0,21-9.4,21-21v-12c0-11.6,9.4-21,21-21h1.5
                                c11.6,0,21,9.4,21,21v72c0,11.6,9.4,21,21,21h0c11.6,0,21-9.4,21-21v-18c0-11.6,9.4-21,21-21h106.5"/>
                            <path id="XMLID_3_" className={styles["st0"]} d="M1815.6,528.1h-139.5c-11.6,0-21-9.4-21-21V313.6c0-11.6-9.4-21-21-21h-3c-11.6,0-21,9.4-21,21
                                v269c0,11.6-9.4,21-21,21h-4c-11.6,0-21-9.4-21-21v-33.5c0-11.6-9.4-21-21-21h-98c-11.6,0-21-9.4-21-21v-12c0-11.6-9.4-21-21-21
                                h-1.5c-11.6,0-21,9.4-21,21v272c0,11.6-9.4,21-21,21h0c-11.6,0-21-9.4-21-21v-218c0-11.6-9.4-21-21-21h-106.5"/>
                        </svg>
                    </div>
                    <button onClick={this.nextSlide} />
                </div>
            </div>
        )
	}
}