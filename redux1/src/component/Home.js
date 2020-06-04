import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsDisplay from './newsDisplay';
import JSON from '../db.json';

class Home extends Component {
    constructor(){
        super()
        
        this.state={
            news: JSON,
            filtered: JSON
        }

    }

    //var age = [44,5,10,56,13,24,32,61]
   //age.filter((data)=> {return data>25})

    filterNews(keyword){
        const out = this.state.news.filter((data) =>{
            return data.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })

        this.setState({filtered:out})
    }
    render(){
        return(
            <React.Fragment>
                <Header userText={(userInput) => {this.filterNews(userInput)}}/>
                <NewsDisplay newslist={this.state.filtered}/>
                <Footer year={"2020"} month={"May"}/>
            </React.Fragment>
        )
    }
    
}

export default Home;



/*
Parent => Child (Simple Props)
Child => Parent (callback function)


var add = (a) => { return a+a}

add(1)

*/