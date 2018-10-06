import React, {Component} from 'react';
import styles from './style.module.css';
import ContactCard from 'components/contact-card';

export default class Contacts extends Component{

    constructor(props){
        super(props)
        this.state={
            cardInfo:[
               {descp:"Lorem",name:"hello",email:"aaaaa",phno:"90393843959"},
               {descp:"Lorem",name:"hello",email:"aaaaa",phno:"90393843959"},
               {descp:"Lorem",name:"hello",email:"aaaaa",phno:"90393843959"},
               {descp:"Lorem",name:"hello",email:"aaaaa",phno:"90393843959"},
               {descp:"Lorem",name:"hello",email:"aaaaa",phno:"90393843959"},
               {descp:"Lorem",name:"hello",email:"aaaaa",phno:"90393843959"},
               {descp:"Lorem",name:"hello",email:"aaaaa",phno:"90393843959"}
            ]
        }
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
                    <header><h1>Contacts</h1></header>
                    <div className={styles["container"]}>
                        {grid}
                    </div>
                </div>
            </div>
        )
    }
}