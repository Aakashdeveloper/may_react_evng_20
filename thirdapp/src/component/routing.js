import React, { Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ArtistDetails from './ArtistDetails';
import FormsComponent from './FormsComponent';
import Header from './Header';

import Home from './Home'

const Routing = ()=>{
    return(
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/details/:id" component={ArtistDetails}/>
                <Route exact path="/forms" component={FormsComponent}/>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;