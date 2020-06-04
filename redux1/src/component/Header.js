import React, {Component, Fragment } from 'react';
import './Header.css'

class Header extends Component{

    constructor(){
       super()

       this.state={
           title:'Edureka Webinar',
           keyword:'User Text Here'
       }

    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }


    render(){
        return(
            <Fragment>
                <header>
                    <p className="logo">{this.state.title}</p>
                   
                    <hr/>
                </header>
            </Fragment>
        )
    }
}

export default Header;