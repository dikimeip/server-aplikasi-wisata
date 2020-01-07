import React, { Component } from 'react';
import Navbar from '../../organism/Navbar';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import BeritaComponent from '../../organism/BeritaComponent';

class NewsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            berita : []
        }
    }

    componentDidMount = () => {
        Axios.get("http://localhost/api_pariwisata/berita.php").then(res => {
            this.setState({
                berita : res.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <BeritaComponent data = {this.state.berita} />
                </div>
            </div>
        )
    }
}

export default NewsPage