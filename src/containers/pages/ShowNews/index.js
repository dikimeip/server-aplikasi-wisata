import React, { Component } from 'react';
import Navbar from '../../organism/Navbar';
import Axios from 'axios';

class ShowNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            judul: "",
            author: "",
            isi: "",
            foto: "",
        }
    }
    componentDidMount = () => {
        const id = this.props.match.params.id
        Axios.get("http://localhost/api_pariwisata/show_berita.php?id=" + id).then(res => {
            this.setState({
                judul: res.data.data.judul_berita,
                author: res.data.data.author_berita,
                isi: res.data.data.isi_berita,
                foto: res.data.data.foto1,
            })
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
                                <h1 className="text-center">SHOW DATA</h1>
                                <hr />
                                <form onSubmit={this.handlerSummit}>
                                    <div className="form-group">
                                        <label>Judul Berita</label>
                                        <p>{this.state.judul}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Author</label>
                                        <p>{this.state.author}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Isi Berita</label>
                                        <p>{this.state.isi}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>foto Berita</label>
                                        <br/>
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

export default ShowNews