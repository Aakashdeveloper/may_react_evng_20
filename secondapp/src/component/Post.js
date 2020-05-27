import React from 'react';
import {Link} from 'react-router-dom'

const Post = () => {
    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
               <h2>Post</h2> 
            </div>
            <div className="panel-body">
                <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
                <h3>JavaScript</h3>
                <Link to="/details/1/JavaScript">Details</Link>
                <h3>React</h3>
                <Link to="/details/2/React">Details</Link>
                <h3>Node</h3>
                <Link to="/details/3/Node">Details</Link>
                <h3>Angular</h3>
                <Link to="/details/4/Angular">Details</Link>
            </div>
        </div>
    )
}

export default Post;