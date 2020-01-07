import React, { Component } from 'react';
import Navbar from '../../organism/Navbar';
import Axios from 'axios';
import PengaduanComponent from '../../organism/PengaduanComponent';
import KomentarComponent from '../../organism/KomentarComponent';

class KomentarPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            komentar : []
        }
    }

    getData = () => {
        Axios.get("http://localhost/api_pariwisata/komentar.php").then(res => {
            //console.log(res)
            this.setState({
                komentar : res.data.data
            })
        })
    }

    componentDidMount = () => {
       this.getData()
    }

    removeHandler = (d) => {
        Axios.delete("http://localhost/api_pariwisata/hapus_komentar.php?id=" + d).then(res => {
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
                     <h1>HALAMAN KOMENTAR</h1>
                     <KomentarComponent data={this.state.komentar} hapus={this.removeHandler} />
               </div>
               
            </div>
        )
    }
}

export default KomentarPage