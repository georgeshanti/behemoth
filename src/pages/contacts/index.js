import React, {Component} from 'react';
import styles from './style.module.css';
import ContactCard from 'components/contact-card';
import axios from 'axios'

export default class Contacts extends Component{

    constructor(props){
        super(props)
        this.state={
            cardInfo:[
               {descp:"Chairman",name:"hello",email:"abc@email.com",phno:"+91 0393843959",img:"https://placeimg.com/640/480/people",gitln:"https://github.com/",linkln:"https://in.linkedin.com/"},
               {descp:"Secretary",name:"hello",email:"abc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",gitln:"https://github.com/",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"abc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",gitln:"https://github.com/",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"abc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",gitln:"https://github.com/",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"aabc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",gitln:"https://github.com/",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"aabc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",gitln:"https://github.com/",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"bc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",gitln:"https://github.com/",linkln:"https://in.linkedin.com/"}
            ]
        }
    }

    componentWillMount(){
		var comp = this;
		axios.get("https://cms.excelmec.org/contact/")
			.then(function (response) {
				comp.setState({cardInfo: response.data})
			})
    }

    render(){
        var grid = []
        for(var i=0 ; i<this.state.cardInfo.length ; i++){
			var gridItem = <ContactCard details={this.state.cardInfo[i]} />
               grid.push(gridItem) 
        }  
        return(
            <div>
               <div className={styles["white-bg"]}></div>
               <div>
                    <header><h1>Get In Touch</h1></header>
                    <div className={styles["container"]}>
                        {grid}
                    </div>
                </div>
            </div>
        )
    }
}