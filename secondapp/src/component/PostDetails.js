import React from 'react';

const PostDetails = (props) => {
    console.log(props)
    return(
        <div className="panel panel-info">
            <div className="panel-heading">
               <h2>PostDetails</h2> 
            </div>
            <div className="panel-body">
                <div className="row">
                    <span className="col col-md-4">
                        <h3>Details for topic {props.match.params.id}</h3>
                    </span>
                    <span className="col col-md-4">
                        <h2>{props.match.params.topic}</h2>
                    </span>
                </div>
                
                
                <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
            </div>
        </div>
    )
}

export default PostDetails;