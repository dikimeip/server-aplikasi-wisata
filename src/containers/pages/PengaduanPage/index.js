import React, { Component } from 'react';
import Navbar from '../../organism/Navbar';
import Axios from 'axios';
import PengaduanComponent from '../../organism/PengaduanComponent';

class PengaduanPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            pengaduan : []
        }
    }

    getData = () => {
        Axios.get("http://localhost/api_pariwisata/pengaduan.php").then(res => {
           // console.log(res)
            this.setState({
                pengaduan : res.data.data
            })
        })
    }

    componentDidMount = () => {
       this.getData()
    }

    removeHandler = (d) => {
        Axios.delete("http://localhost/api_pariwisata/hapus_pengaduan.php?id=" + d).then(res => {
            if (res.data.value === 1) {
                this.getData()
            } else {
                console.log('error')
            }
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                     <h1>HALAMAN PENGADUAN</h1>
                     <PengaduanComponent data={this.state.pengaduan} hapus={this.removeHandler} />
                </div>
               
            </div>
        )
    }
}

export default PengaduanPage