import React, { Component } from 'react'
import Navbar from '../../organism/Navbar'
import Axios from 'axios'

class TambahWisata extends Component {
    constructor(props){
        super(props)
        this.state = {
            nama : "",
            tarik : "",
            fasilitas :"",
            akses : "",
            map : "",
            foto : "",
            ket:"",
            file : {
                fto:""
            }
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
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
        Axios.post('http://localhost/api_pariwisata/tambah_wisata.php',this.state).then(res => {
            console.log(res)
            if (res.data.id === 1) {
                this.props.history.push('/wisata')
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
                                        <label>Masukan Nama Wisata</label>
                                        <input className="form-control" type="text" name="nama" onChange={this.inputChange}  />
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Daya Tarik</label>
                                        <textarea className="form-control" name="tarik" onChange={this.inputChange}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Fasilitas Pariwisata</label>
                                        <textarea className="form-control" name="fasilitas" onChange={this.inputChange}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Akses Wisata</label>
                                        <textarea className="form-control" name="akses" onChange={this.inputChange}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Maps Long Lang</label>
                                        <input className="form-control" type="text" name="map"  onChange={this.inputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Keterangan Wisata</label>
                                        <select name="ket" className="form-control" onChange={this.inputChange}>
                                            <option value="ALAM">WISATA ALAM</option>
                                            <option value="BUATAN">WISATA BUATAN</option>
                                            <option value="BUDAYA">WISATA BUDAYA</option>
                                            <option value="KULINER">WISATA KULINER</option>
                                            <option value="HOTEL">HOTEL</option>
                                            <option value="KERAJINAN">KERAJINAN</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan foto</label>
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

export default TambahWisata