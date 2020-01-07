import React, { Component } from 'react'

class Login extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="panel panel-info">
                            <div className="panel-body">
                                <h1 className="text-center">Login Page</h1>
                                <hr/>
                                <div className="form-group">
                                    <label>Masukan Username</label>
                                    <input className="form-control" type="text" name="uname" />
                                </div>
                                <div className="form-group">
                                    <label>Masukan Username</label>
                                    <input className="form-control" type="text" name="pswd" />
                                </div>
                                <button className="btn btn-info">LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
