import React, {Component} from 'react';
import styles from './style.module.css';


export default class EventGridCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            transform: "translateY(50%)"
        }
        this.divstyle= {
            backgroundColor: this.props.colors,
          };
    }

    componentDidMount(){
        var comp = this
        setTimeout(function(){
            comp.setState({
                opacity: 1,
                transform: "translateY(0%)"
            })
            }
        ,this.props.delay);
    }

    render(){
        return(
            <div className={styles["event"]} style={{opacity: this.state.opacity, transform: this.state.transform}}>
               <div className={styles["picture"]} style={this.divstyle}>
                   <img alt={this.props.details.name} src={this.props.details.img}/>
                </div>
                <h2>{this.props.details.name}</h2>
                <p className={styles["info"]} >
                
                      {this.props.details.details}
                   
                </p>

            </div>
        )
    }

}