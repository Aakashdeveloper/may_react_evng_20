import React, {Component, Fragment } from 'react';
import './Header.css'

class Header extends Component{
    render(){
        return(
            <Fragment>
                <header>
                    <p className="logo">React App</p>
                    <center>
                        <input />
                    </center>
                    <hr/>
                </header>
            </Fragment>
        )
    }
}

export default Header;