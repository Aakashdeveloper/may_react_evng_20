import React from 'react';

const NewsDisplay = (props) => {
    console.log("newsDisplay",props)

    const renderList = props.newslist.map((data,index) => {
        return(
            <div key={index}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
             
            </div>
        )
    })



    return(
        <div>
           {renderList}
        </div>
    )
}

export default NewsDisplay;

/*
   <img src={data.imageUrl} alt={data.title}/>
*/