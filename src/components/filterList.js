import React, {Component} from 'react';
import '../pages/excel-events.css';

class Filter extends Component{
    constructor(props){
        super(props)

        //method binding
        this.selectedList=this.selectedList.bind(this)
        this.showOptions=this.showOptions.bind(this)

        this.state={
            selectedItem:this.props.initialItems[0]
        }
    
        this.items=this.props.initialItems.map((item,i)=>(
        <div onClick={() =>this.selectedList(item)}>{item}</div>
    ))
     }
     showOptions(){
		document.getElementsByClassName("dropdown-content")[this.props.id].classList.remove("hidden");
	}
     
     selectedList(item){
         this.setState({selectedItem:item})
         document.getElementsByClassName("dropdown-content")[this.props.id].classList.add("hidden");
         this.props.filterList(item,this.props.id)
        }

     render(){
     return(
         <div className="dropdown">
                    <div className="dropbtn" onClick={this.showOptions}>{this.state.selectedItem}</div>
                          <div className="dropdown-content hidden">
                             {this.items}
                           </div>  
         </div>          
     )
    }
}

export default Filter;