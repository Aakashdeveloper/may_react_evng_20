//Get Initial state
//Set Initial State
//Before get Created
//Render
//After get created

import React, {Component} from 'react';

class LifeCycle extends Component {
    //1 Get Initial state
    constructor(props){
        super(props)
        console.log(">>>>>>>Inside the constructor<<<<<<<")
        //2 Set Initial State
        this.state={
            title:'React App'
        }
        
    }

    //3 Before get Created
    componentWillMount(){
        console.log(">>>>>>>Inside the componentWillMount<<<<<<<")
    }

    componentWillUpdate(){
        console.log(">>>>>>>Inside the componentWillUpdate<<<<<<<")
    }

    componentDidUpdate(){
        console.log(">>>>>>>Inside the componentDidUpdate<<<<<<<")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(">>>>>shouldComponentUpdate<<<<<")
        if(nextState.title=== this.state.title){
            return false
        }else{
            return true
        }
    }

    //4Render
    render(){
        console.log(">>>>>>>Inside the render<<<<<<<")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something Else'})}}
                >
                    Counter
                </div>
            </div>
        )
    }
    //5 After get Created
    componentDidMount(){
        console.log(">>>>>>>Inside the componentDidMount<<<<<<<")
    }


}

export default LifeCycle;