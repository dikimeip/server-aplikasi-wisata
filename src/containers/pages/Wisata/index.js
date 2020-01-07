import React, { Component } from 'react'
import Navbar from '../../organism/Navbar'
import Axios from 'axios'

class Wisata extends Component {
    constructor(props){
        super(props)
        this.state = {
            wisata : []
        }
    }

    componentDidMount = () => {
        Axios.get('http://localhost/api_pariwisata/wisata.php').then(res => {
            console.log(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>HALAMAN WISATA</h1>
            </div>

        )
    }
}

export default Wisata