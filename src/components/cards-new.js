import React, { Component } from 'react';
import './cards-new.css';


class CardsNew extends Component {

    constructor(props) {
        super(props);
        
        this.switchLink=this.switchLink.bind(this)
        
        this.index=this.props.index;
        this.content = this.props.content;

	}


    switchLink(e){
        console.log('switchLink works')
        let xScrollWidth = document.getElementsByClassName('tab-content-wrap')[this.index].scrollWidth
        let scrollDistance
        if(e==='about'){
            document.getElementsByClassName('tab-content-wrap')[this.index].style.transform="translate(0px)"
        }
        else if(e==='format'){
            scrollDistance=xScrollWidth*0.25
            document.getElementsByClassName('tab-content-wrap')[this.index].style.transform="translate(-"+scrollDistance+"px)"
            console.log('in format');
        }
        else if(e==='rules'){
            scrollDistance=xScrollWidth*0.50
            document.getElementsByClassName('tab-content-wrap')[this.index].style.transform="translate(-"+scrollDistance+"px)"
        }
        else if(e==='contact'){
            scrollDistance=xScrollWidth*0.75
            document.getElementsByClassName('tab-content-wrap')[this.index].style.transform="translate(-"+scrollDistance+"px)"
        }

    }

    render() {
    return (
      <div className="card">
        <div className="card-content">
        <div className="heading-font">Heading Event</div>
        <div className="purple-font">Prize Pool - 25k</div>
            <br/><br/>
            <div className="main-nav-block" >
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
        <div id="tab-wrapper" className="tab-wrapper">
        <div className="tab-content-wrap">
        <div id="about-content" className="white-font tab-content">
        <p>A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough.
                 Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. 
                Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.
        </p>
             <div className="mini-grid ">
               <ul>
                    <li className="mini-grid-item">
                       <h4 className="purple-font">Date</h4>
                       <p className="white-font"> 7<br/>October </p>
                    </li>
                    <li className="mini-grid-item">
                       <h4 className="purple-font">Time</h4>
                       <p className="white-font"> 10:30-12:30</p>
                    </li>
                    <li className="mini-grid-item">
                        <h4 className="purple-font">Venue</h4>
                        <p className="white-font"> To be<br/>Announced </p>
                    </li>
                </ul>
             </div>
         </div>
         <div id="format-content" className="white-font tab-content">
            <p><strong>Preliminary Round</strong></p><br/>
            <p>MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.</p><br/><br/>
            <p><strong>Final Round</strong></p><br/>
            <p>Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order.</p><br/>
            <p>The question will be provided to each member only at the start of their own time slot. Once the question has been provided, each member can code for 5 mins initially, then the time slots vary to 10mins, 5mins and 10mins again. After one person’s time slot is complete the next person of the team is expected to continue coding from where his teammate had left off. <br/>
            Duration for the final round is 120 minutes in total.<br/>
            The teams that gets the desired output in the shortest time stand a chance to win the prize money.</p><br/>
         </div> 
         <div id="rules-content" className="white-font tab-content">
         <strong>Team Formation:</strong>

            <p>1. A team can have a maximum of 3 members</p><br/>

            <p>2. A participant cannot be part of more than one team .</p><br/>

            <p>3. It is not necessary that the participants forming a team should be from the

            same college</p><br/>

            <p>4. There is no restriction in the number of teams from the same college .</p><br/>

         </div>
         <div id="contact-content" className="white-font  tab-content">
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
