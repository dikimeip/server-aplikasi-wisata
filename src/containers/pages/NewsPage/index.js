import React, { Component } from 'react';
import Navbar from '../../organism/Navbar';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import BeritaComponent from '../../organism/BeritaComponent';

class NewsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            berita: []
        }
    }

    getData = () => {
        Axios.get("http://localhost/api_pariwisata/berita.php").then(res => {
            this.setState({
                berita: res.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getData()
    }

    removeHandler = (id) => {
        Axios.delete("http://localhost/api_pariwisata/hapus_berita.php?id=" + id).then(res => {
            if (res.data.value === 1) {
                this.getData()
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
                <div className="container">
                    <Link className="btn btn-info" to="/tambahberita" >TAMBAH NEWS</Link>
                    <BeritaComponent data={this.state.berita} hapus={this.removeHandler} />
                </div>
            </div>
        )
    }
}

export default NewsPage