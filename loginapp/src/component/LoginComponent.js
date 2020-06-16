import React,{Component} from 'react'
 
class LoginComponent extends Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
    }

    handleChangeEmail =(event) => {
        this.setState({email:event.target.value})
    }
    handleChangePassword =(event) => {
        this.setState({password:event.target.value})
    }
    handleSubmit =(event) => {
        
    }
    render(){
        return(
            <div>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        Login Form
                    </div>
                    <div className="panel-body">
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
                            Login
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default LoginComponent;