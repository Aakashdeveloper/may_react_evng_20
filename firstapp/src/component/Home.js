import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsDisplay from './newsDisplay';
import JSON from '../db.json';

class Home extends Component {
    constructor(){
        super()
        
        this.state={
            news: JSON
        }

    }

    render(){
        
        return(
            <React.Fragment>
                <Header/>
                <NewsDisplay newslist={this.state.news}/>
                <Footer year={"2020"} month={"May"}/>
            </React.Fragment>
        )
    }
    
}

export default Home;



