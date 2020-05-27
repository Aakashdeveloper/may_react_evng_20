import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './component/Home';
import Posts from './component/Post';
import Profile from './component/profile';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Post</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/profile" component={Profile}></Route>
    </BrowserRouter>, document.getElementById('root')
)