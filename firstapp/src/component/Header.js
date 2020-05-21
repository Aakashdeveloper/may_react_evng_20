import React, {Component, Fragment } from 'react';
import './Header.css'

class Header extends Component{

    constructor(){
       super()

       this.state={
           title:'React First App',
           keyword:'User Text Here'
       }

    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
    }


    render(){
        return(
            <Fragment>
                <header>
                    <p className="logo">{this.state.title}</p>
                    <center>
                        <input onChange={this.handleChange}/>
                        <p>{this.state.keyword}</p>
                    </center>
                    <hr/>
                </header>
            </Fragment>
        )
    }
}

export default Header;