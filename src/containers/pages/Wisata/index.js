import React, { Component } from 'react'
import Navbar from '../../organism/Navbar'
import Axios from 'axios'
import WisataComponent from '../../organism/WisataComponent'
import { Link } from 'react-router-dom'

class Wisata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wisata: []
        }
    }

    componentDidMount = () => {
        Axios.get('http://localhost/api_pariwisata/wisata.php').then(res => {
            // console.log(res.data.data)
            this.setState({
                wisata: res.data.data
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
                    <Link to="/tambahwisata" className="btn btn-info">TAMBAH WISATA</Link>
                    <br/>
                    <WisataComponent data={this.state.wisata} />
                </div>
            </div>

        )
    }
}

export default Wisata