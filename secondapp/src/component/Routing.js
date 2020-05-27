import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Posts from './Post';
import Profile from './profile';
import PostDetails from './PostDetails';

const Routing = () => {

    return(
            <BrowserRouter>
            <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Developer Funnel</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Post</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                   
                    </div>
                </div>
                </nav>
            </div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/posts" component={Posts}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/details/:id/:topic" component={PostDetails}></Route>
        </BrowserRouter>
    )

}


export default Routing;