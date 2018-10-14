import React, {Component} from 'react';
import styles from './style.module.css';

class Filter extends Component{
    constructor(props){
        super(props)

        //method binding
        this.selectedList=this.selectedList.bind(this)
        

        this.state={
            selectedItem:this.props.initialItems[0]
        }
    
        this.items=this.props.initialItems.map((item,i)=>(
        <div onClick={() =>this.selectedList(item)}>{item}</div>
    ))
     }

     componentWillMount(){
         document.addEventListener('mousedown',this.handleClick,false)
     }

     componentWillUnmount(){
         document.removeEventListener('mousedown',this.handleClick,false)
     }

     handleClick=(e)=>{
         if(this.node.contains(e.target)){
		       document.getElementsByClassName(styles["dropdown-content"])[this.props.id].classList.remove(styles["hidden"]);
             return
            }
          else{
            document.getElementsByClassName(styles["dropdown-content"])[this.props.id].classList.add(styles["hidden"]);
          }
        }       
     
     selectedList(item){
         this.setState({selectedItem:item})
         document.getElementsByClassName(styles["dropdown-content"])[this.props.id].classList.add(styles["hidden"]);
         this.props.filterList(item,this.props.id) //call parent fn to update currentoption
        }

     render(){
     return(
         <div className={styles["dropdown"]} ref={node => this.node=node}>
                    <div className={styles["dropbtn"]} >{this.state.selectedItem}</div>
                          <div className={styles["dropdown-content"] + " " + styles["hidden"]}>
                             {this.items}
                           </div>  
         </div>          
     )
    }
}

export default Filter;