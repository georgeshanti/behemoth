// implements code splitting for route components
import React,{ Component } from 'react'





/*
 * returns an a react component that 
 * asynchronously loads the target component on mounting
 * renders an optional spinnerComponent while loading the main component
 */
export default function asyncComponent(importComponent,spinnerComponent=null){ 
    
    class AsyncComponent extends Component{
        
        constructor(props){
            super(props)

            this.state = {
                component: null // the actual component will be asynchronously loaded on mounting
            }
        }

        async componentDidMount(){

            // async loading of the target component
            const { default: component } = await importComponent()
            
            this.setState({
                component
            })
        }

        render(){
            const C = this.state.component;
            return C?<C {...this.props} />:spinnerComponent;
        }
    }

    return AsyncComponent
}