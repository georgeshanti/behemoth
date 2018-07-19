import React, { Component } from 'react';
import styles from './style.module.css';
import ReactDOM from 'react-dom';

class CardsNew extends Component {

    constructor(props) {
        super(props);
        
        this.switchLink=this.switchLink.bind(this)
        
        this.index=this.props.index;   

    }

    componentWillUpdate(){
        this.switchLink('about');
    }
    
    switchLink(e){
        console.log('switchLink works')
        let xScrollWidth = document.getElementsByClassName(styles['tab-content-wrap'])[this.index].scrollWidth
        let scrollDistance
        if(e==='about'){
            document.getElementsByClassName(styles['tab-content-wrap'])[this.index].style.transform="translate(0px)"
        }
        else if(e==='format'){
            scrollDistance=xScrollWidth*0.25
            document.getElementsByClassName(styles['tab-content-wrap'])[this.index].style.transform="translate(-"+scrollDistance+"px)"
            console.log('in format');
        }
        else if(e==='rules'){
            scrollDistance=xScrollWidth*0.50
            document.getElementsByClassName(styles['tab-content-wrap'])[this.index].style.transform="translate(-"+scrollDistance+"px)"
        }
        else if(e==='contact'){
            scrollDistance=xScrollWidth*0.75
            document.getElementsByClassName(styles['tab-content-wrap'])[this.index].style.transform="translate(-"+scrollDistance+"px)"
        }

    }

    render() {
    return (
      <div ref="test" className={styles["card"]}>
        <div className={styles["card-content"]}>
        <div className={styles["heading-font"]}>Heading Event</div>
        <div className={styles["purple-font"]}>Prize Pool - 25k</div>
            <br/><br/>
            <div className={styles["main-nav-block"]} >
                <ul>
                    <li onClick={()=>this.switchLink('about')}>                        
                        <div id="about" >About</div>
                    </li>
                    <li onClick={()=>this.switchLink('format')}>
                        <div id="format" >Format</div>
                    </li>
                    <li onClick={()=>this.switchLink('rules')}>
                        <div id="rules" >Rules</div>
                    </li>
                    <li onClick={()=>this.switchLink('contact')}>
                        <div id="contact" >Contact</div> 
                    </li>
                </ul>
            </div>
        </div>
        <div id="tab-wrapper" className={styles["tab-wrapper"]}>
        <div className={styles["tab-content-wrap"]}>
        <div id="about-content" className={styles["white-font"] + " " + styles["tab-content"]}>
        <p>
            {this.props.Eventcontent.about.content}
        </p>
             <div className={styles["mini-grid"]}>
               <ul>
                    <li className={styles["mini-grid-item"]}>
                       <h4 className={styles["purple-font"]}>Date</h4>
                       <p className={styles["white-font"]}>{this.props.Eventcontent.about.date}</p>
                    </li>
                    <li className={styles["mini-grid-item"]}>
                       <h4 className={styles["purple-font"]}>Time</h4>
                       <p className={styles["white-font"]}>{this.props.Eventcontent.about.time}</p>
                    </li>
                    <li className={styles["mini-grid-item"]}>
                        <h4 className={styles["purple-font"]}>Venue</h4>
                        <p className={styles["white-font"]}>{this.props.Eventcontent.about.venue}</p>
                    </li>
                </ul>
             </div>
         </div>
         <div id="format-content" className={styles["white-font"] + " " + styles["tab-content"]}>
            <p><strong>Preliminary Round</strong></p><br/>
            <p>{this.props.Eventcontent.format.prelims}</p><br/><br/>
            <p><strong>Final Round</strong></p><br/>
            <p>{this.props.Eventcontent.format.final}</p><br/>
            <p>The question will be provided to each member only at the start of their own time slot. Once the question has been provided, each member can code for 5 mins initially, then the time slots vary to 10mins, 5mins and 10mins again. After one person’s time slot is complete the next person of the team is expected to continue coding from where his teammate had left off. <br/>
            Duration for the final round is 120 minutes in total.<br/>
            The teams that gets the desired output in the shortest time stand a chance to win the prize money.</p><br/>
         </div> 
         <div id="rules-content" className={styles["white-font"] + " " + styles["tab-content"]}>
         <strong>Team Formation:</strong>

            <p>1. A team can have a maximum of 3 members</p><br/>

            <p>2. A participant cannot be part of more than one team .</p><br/>

            <p>3. It is not necessary that the participants forming a team should be from the

            same college</p><br/>

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
   
    
    );
  }
}

export default CardsNew;
