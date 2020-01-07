import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: "",
            pass: "",
            isLogin : false
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlerSubmit = (event) => {
        event.preventDefault()
        Axios.post('http://localhost/api_pariwisata/login.php',this.state).then(res => {
            //console.log(res)
            if (res.data.value === 1) {
               this.setState({
                   isLogin:true
               })
            } else {
                console.log('gagal')
            }
        }).catch(err => {
            console.log(err)
        })
    }



    render() {

        if (this.state.isLogin) {
            return( <Redirect to ="/home" /> )
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="panel panel-info">
                            <div className="panel-body">
                                <h1 className="text-center">Login Page</h1>
                                <hr />
                                <form onSubmit={this.handlerSubmit}>
                                    <div className="form-group">
                                        <label>Masukan Username</label>
                                        <input className="form-control" type="text" name="uname" onChange={this.inputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Username</label>
                                        <input className="form-control" type="text" name="pass" onChange={this.inputChange} />
                                    </div>
                                    <input type="submit" value="LOGIN" className="btn btn-info" onSubmit={this.handlerSubmit} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
