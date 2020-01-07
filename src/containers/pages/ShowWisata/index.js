import React, { Component } from 'react'
import Navbar from '../../organism/Navbar'
import Axios from 'axios'

class ShowWisata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: "",
            tarik: "",
            fasilitas: "",
            akses: "",
            map: "",
            foto: "",
            tanggal: ""
        }
    }
    componentDidMount = () => {
        const id = this.props.match.params.id
        Axios.get('http://localhost/api_pariwisata/show_wisata.php?id=' + id).then(res => {
            this.setState({
                nama: res.data.data.nama_wisata,
                tarik: res.data.data.daya_tarik,
                fasilitas: res.data.data.fasilitas,
                akses: res.data.data.akses,
                map: res.data.data.map_wisata,
                foto: res.data.data.foto1,
                tanggal: res.data.data.tanggal_wisata,
            })
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
                                        <p>{this.state.nama}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Daya Tarik</label>
                                        <p>{this.state.tarik}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Fasilitas Pariwisata</label>
                                        <p>{this.state.fasilitas}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Akses Wisata</label>
                                        <p>{this.state.akses}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Tanggal</label>
                                        <p>{this.state.tanggal}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan foto</label><br/>
                                        <img src={"http://localhost/api_pariwisata/img/"+this.state.foto} />
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

export default ShowWisata