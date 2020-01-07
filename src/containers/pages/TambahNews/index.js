import React, { Component } from 'react';
import Navbar from '../../organism/Navbar';
import Axios from 'axios';

class TambahNews extends Component {
    constructor(props){
        super(props)
        this.state = {
            judul:"",
            author:"",
            isi:"",
            foto:"",
            file : {
                fto : ""
            }
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    imageChange = (e) => {
        this.setState({
            foto: e.target.files[0].name,
            file: {
                fto: e.target.files[0]
            }
        })
    }

    handlerSummit = (e) => {
        e.preventDefault()
        const formdata = new FormData
        formdata.append('foto',this.state.file.fto,this.state.foto)
        Axios.post('http://localhost/api_pariwisata/file_pariwisata.php',formdata)
        Axios.post("http://localhost/api_pariwisata/tambah_berita.php",this.state).then(res => {
            //console.log(res)
            if (res.data.id === 1) {
                this.props.history.push('/news')
            } else {
                console.log('error')
            }
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="panel panel-info">
                            <div className="panel-body">
                                <h1 className="text-center">TAMBAH DATA</h1>
                                <hr />
                                <form onSubmit={this.handlerSummit}>
                                    <div className="form-group">
                                        <label>Masukan Judul Berita</label>
                                        <input className="form-control" type="text" name="judul" onChange={this.inputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Author</label>
                                        <input className="form-control" type="text" name="author" onChange={this.inputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Isi Berita</label>
                                        <textarea className="form-control" name="isi" onChange={this.inputChange}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan foto Berita</label>
                                        <input name="foto" className="form-control" type="file" onChange={this.imageChange}></input>
                                    </div>
                                    <input type="submit" value="LOGIN" className="btn btn-info" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TambahNews