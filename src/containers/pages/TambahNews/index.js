import React, { Component } from 'react';
import Navbar from '../../organism/Navbar';

class TambahNews extends Component {
    constructor(props){
        super(props)
        this.state = {
            judul:"",
            author:"",
            isi:"",
            foto:""
        }
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