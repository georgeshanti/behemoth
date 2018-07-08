import React, {Component} from 'react'
import './cards-new.css'

export default class About extends Component {

    render() {
        return(
            <div id="about-content" className="white-font card-text">A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough.
                 Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. 
                Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.

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
        );
    }
}