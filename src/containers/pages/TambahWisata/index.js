import React, { Component } from 'react'
import Navbar from '../../organism/Navbar'

class TambahWisata extends Component {
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
                                <form>
                                    <div className="form-group">
                                        <label>Masukan Nama Wisata</label>
                                        <input className="form-control" type="text" name="nama"  />
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Daya Tarik</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Fasilitas Pariwisata</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Akses Wisata</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan Maps Long Lang</label>
                                        <input className="form-control" type="text" name="maps"  />
                                    </div>
                                    <div className="form-group">
                                        <label>Masukan foto</label>
                                        <input name="foto" className="form-control" type="file"></input>
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