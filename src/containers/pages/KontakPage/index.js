import React, { Component } from 'react';
import Navbar from '../../organism/Navbar';
import Axios from 'axios';

class KontakPage  extends Component{
    constructor(props){
        super(props)
        this.state = {
            map : "",
            ig : "",
            fb: "",
            phone:""
        }
    }
    componentDidMount = () => {
        this.getData()
    }
    inputChange = (e) => {

    }
    getData = () => {
        Axios.get("http://localhost/api_pariwisata/kontak.php").then(res => {
            console.log(res.data.data[0])
           this.setState({
               map :res.data.data[0].map
           })
        })
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <h1>HALAMAN KONTAK</h1>
                    <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="panel panel-info">
                            <div className="panel-body">
                                <h1 className="text-center">UBAH KONTAK</h1>
                                <hr />
                                <form onSubmit={this.handlerSummit}>
                                    <div className="form-group">
                                        <label>INSTAGRAM</label>
                                        <input className="form-control" value={this.state.ig} type="text" name="ig" onChange={this.inputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>FACEBOOK</label>
                                        <input className="form-control" value={this.state.fb} type="text" name="fb" onChange={this.inputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>PHONE</label>
                                        <input className="form-control" value={this.state.phone} type="text" name="phone" onChange={this.inputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>MAPS</label>
                                        <input className="form-control" value={this.state.map} type="text" name="map" onChange={this.inputChange} />
                                    </div>
                                    <input type="submit" value="LOGIN" className="btn btn-info" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default KontakPage