import React,{ Component } from 'react'

/*
 * Takes the path of the component and an optional spinnerComponent
 * returns an a react component that 
 * asynchronously loads the target component on mounting
 * renders an optional spinnerComponent while loading the main component
 */
export default function asyncComponent(importPath,spinnerComponent=null){ 
    
    class AsyncComponent extends Component{
        
        constructor(props){
            super(props)

            this.importComponent = () => import(importPath)

            this.state = {
                component: null // the actual component will be asynchronously loaded on mounting
            }
        }

        async componentDidMount(){

            // async loading of the target component
            const { default: component } = await this.importComponent()
            
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