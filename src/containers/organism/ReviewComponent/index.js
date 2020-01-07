import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const ReviewComponent = (props) => {
    const ListReview = props.data.map(data => (
        <tbody key={data.id_review}>
            <tr>
                <td>{data.nama_review}</td>
                <td>{data.email_review}</td>
                <td>{data.title_review}</td>
                <td>{data.isi_review}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => props.hapus(data.id_review)} >HAPUS</button>
                </td>
            </tr>
        </tbody>
    ))
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>NAMA</th>
                        <th>EMAIL</th>
                        <th>TITLE</th>
                        <th>ISI</th>
                        <th>AKSI</th>
                    </tr>
                </thead>
                {ListReview}
            </table>
        </div>
    )
}


export default ReviewComponent