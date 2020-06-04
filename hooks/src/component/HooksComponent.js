import React,{useState,useEffect} from 'react';
import DisplayComponent from './displayComponent';

function HooksComponent(){
    const [title] = useState('Developer Funnel');
    const [counter,setCounter] = useState(0);
    const [count,abc] = useState(0);
    const [news, setNews] = useState()

    console.log(">>>>Inside Component")

    const url = " http://localhost:8900/news"
    useEffect(() => {
        console.log(">>>>Inside useEffect")
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            setNews(data)
        })
    },[title])


     return(
         <div>
             <h2>{title}</h2>
             Hooks App
             <h3>{counter}</h3>
             <button onClick={() => {setCounter(counter+1)}}>
                 Click Me First
            </button>
            <h3>{count}</h3>
             <button onClick={() => {abc(count+1)}}>
                 Click Me Second
            </button>
            <DisplayComponent mydata={news}/>
         </div>
     )
}

export default HooksComponent;