import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegiterComponent';
import Profile from './Profile';
import UserList from './UserList';

const Routing  = () => {
    return(
        <div>
           <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}></Route>
                <Route exact path="/login" component={LoginComponent}></Route>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/list" component={UserList}></Route>
           </BrowserRouter>
        </div>
    )
}

export default Routing;