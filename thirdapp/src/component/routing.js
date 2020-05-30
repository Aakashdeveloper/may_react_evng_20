import React, { Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ArtistDetails from './ArtistDetails';

import Home from './Home'

const Routing = ()=>{
    return(
        <Fragment>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route exact path="/details/:id" component={ArtistDetails}/>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;