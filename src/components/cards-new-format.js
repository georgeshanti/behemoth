import React, {Component} from 'react'
import './cards-new.css'

export default class Format extends Component {

    render() {
        return(
            <div id="format-content" className="white-font card-content">
            <p><strong>Preliminary Round</strong></p><br/>
            <p>MCQ round of 30 questions for 30 minutes. Top 8 teams will be Shortlisting to the final round. Correct answer will get 2 marks each. Wrong answers will have a negative mark of 1 marks.</p><br/><br/>
            <p><strong>Final Round</strong></p><br/>
            <p>Final round comprises of 3 questions. The team members must decide which order they wish to follow before the final round question has been provided, and will not be allowed to change this order.</p><br/>
            <p>The question will be provided to each member only at the start of their own time slot. Once the question has been provided, each member can code for 5 mins initially, then the time slots vary to 10mins, 5mins and 10mins again. After one person’s time slot is complete the next person of the team is expected to continue coding from where his teammate had left off. <br/>
            Duration for the final round is 120 minutes in total.<br/>
            The teams that gets the desired output in the shortest time stand a chance to win the prize money.</p><br/>
         </div>
        );
    }
}