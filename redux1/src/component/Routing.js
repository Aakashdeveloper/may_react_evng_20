import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Navbar from './navbar'

import MyHome from './Home1'
import Post from './Post'
import Profile from './Profile'

const Routing = () => {

    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Route exact path="/" component={MyHome}></Route>
                <Route exact path="/post" component={Post}></Route>
                <Route exact path="/profile" component={Profile}></Route>
            </BrowserRouter>
        </div>
    )
}

export default Routing