import React,{Component} from 'react';
import Banner from './Banner';
import Artistlist from './Artist';

const url = "http://localhost:8900/artists";

class Home extends Component {

    constructor(){
        super()

        this.state={
            artist:''
        }
    }

    render(){
        return(
            <div>
                <Banner/>
                <Artistlist  artistData={this.state.artist}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({artist:data})
        })
    }
    
}

export default Home;