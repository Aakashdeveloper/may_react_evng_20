import React, {Component} from 'react';
import { connect } from 'react-redux';
import { moviesList } from '../actions';
import { bindActionCreators } from 'redux';

class Home extends Component {
    componentDidMount(){
        this.props.moviesList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
            </div>
        )
    }
}


//help to recive the state from store
function mapStateToProps(){

}

//help to dispatch action
function mapDispatchToProps(dispatch){
    return bindActionCreators({moviesList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);