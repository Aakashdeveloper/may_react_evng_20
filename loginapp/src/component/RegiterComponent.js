import React,{Component} from 'react'

const registerUrl = "http://localhost:5000/api/auth/register"
class RegisterComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleChangeName =(event) => {
        this.setState({name:event.target.value})
    }
    handleChangeEmail =(event) => {
        this.setState({email:event.target.value})
    }
    handleChangePassword =(event) => {
        this.setState({password:event.target.value})
    }
    handleSubmit =(event) => {
        var data ={
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }

        fetch(registerUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/login'))
    }
    render(){
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register Form
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"
                            value={this.state.name}
                            onChange={this.handleChangeName} 
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" 
                            value={this.state.email}
                            onChange={this.handleChangeEmail} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" 
                            value={this.state.password}
                            onChange={this.handleChangePassword} className="form-control"/>
                        </div>
                        <button type="button" className="btn btn-success"
                        onClick={this.handleSubmit} >
                            Register
                        </button>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default RegisterComponent;