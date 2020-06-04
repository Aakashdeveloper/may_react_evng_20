import React from 'react';

function DisplayComponent(props) {

    const renderList = ({mydata}) => {
        if(mydata){
            return mydata.map((item) => {
                return(
                    <div>
                        <h2>{item.title}</h2>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            News List
            {renderList(props)}
        </div>
    )
}

export default DisplayComponent;