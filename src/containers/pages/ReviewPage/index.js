import React, { Component } from 'react';
import Navbar from '../../organism/Navbar';
import Axios from 'axios';
import ReviewComponent from '../../organism/ReviewComponent';

class ReviewPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            review : []
        }
    }

    getData = () => {
        Axios.get("http://localhost/api_pariwisata/review.php").then(res => {
            this.setState({
                review : res.data.data
            })
        })
    }

    componentDidMount = () => {
       this.getData()
    }

    removeHandler = (d) => {
        Axios.delete("http://localhost/api_pariwisata/hapus_review.php?id=" + d).then(res => {
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
                     <h1>HALAMAN REVIEW</h1>
                     <ReviewComponent data={this.state.review} hapus = {this.removeHandler} />
                </div>
               
            </div>
        )
    }
}

export default ReviewPage