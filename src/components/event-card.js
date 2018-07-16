import React, { Component } from 'react';
import './event-card.css';

class Cards extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <div className="heading-font">Heading Event</div>
        <div className="purple-font">Prize Pool - 25k</div>
            <br/><br/>
            <nav>
                <ul>
                    <li>
                    <div class="item-container">
                        <div class="item-top">Description</div>
                        <div class="item-bottom">Description</div>
                    </div>
                    </li>
                    <li>
                    <div class="item-container">
                        <div class="item-top">Event Format</div>
                        <div class="item-bottom">Event Format</div>
                    </div>
                    </li>
                    <li>
                    <div class="item-container">
                        <div class="item-top">Rules</div>
                        <div class="item-bottom">Rules</div>
                    </div>
                    </li>
                    <li>
                    <div class="item-container">
                        <div class="item-top">Contact</div>
                        <div class="item-bottom">Contact</div>
                    </div>
                    </li>
                </ul>
            </nav>
            <div className="white-font">A million things can happen in a moment. From myriad emotions to familiar scents, places and it's people to memories and journeys, a moment is never enough. Photography is the art of weaving a million stories from a single moment. It's never just about what is seen, it's always about how it is seen and experienced. For those who believe that immortality is just a click away, Excel 2017 brings you 'The Third Eye Photography Contest' in the memory of Vineeth Marar. 


Become a storyteller, capture defining moments and share your experience through images. Ignite passions, initiate thought and inspire action through the power of the lens.</div>
        </div>
         <div className="mini-grid">
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

export default Cards;
