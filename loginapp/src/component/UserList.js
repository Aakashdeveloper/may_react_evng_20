import React,{Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "http://localhost:5000/api/auth/users";

class UserList extends Component {
    constructor(){
        super()

        this.state={
            users:''
        }
    }

    render(){
        if(sessionStorage.getItem('_ltk') == null){
            this.props.history.push('/login')
        }
        if(sessionStorage.getItem('_ltk') !== null && sessionStorage.getItem('_Rtk') !== 'Admin'){
            this.props.history.push('/profile')
        }
        return(
            <div>
               <UserDisplay userData={this.state.users}/>
            </div>
        )
    }

    componentWillMount(){
        fetch(url,{Method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                users:data
            })
        })
    }
    
}

export default UserList;