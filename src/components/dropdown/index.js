import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import styles from './style.module.css';

export default class DropDown extends Component {

	constructor(props) {
        super(props);
        this.state={active: false}
        this.active = this.active.bind(this)
    }

    active = () => (e) => {
        this.setState({active: !this.state.active})
    }
    
	render() {
        var options = []
        var a = this.state.active?" "+styles["active"]:""
        for(var i in this.props.items){
            var option = (
                <div className={styles["option"]} onClick={this.props.handle(i)}>{this.props.items[i]}</div>
            )
            options.push(option)
        }		
		return(
			<div className={styles["dropdown"] + a} onClick={this.active()}>
                <div className={styles["selected"]}>
                    <div className={styles["option"]}>
					    <i className="fas fa-filter"></i>{this.props.items[this.props.option]}
                    </div>
                </div>
                <div className={styles["options"]}>
                    {options}
                </div>
			</div>
		);
	}
}