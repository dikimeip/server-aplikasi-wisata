import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const PengaduanComponent = (props) => {
    const ListReview = props.data.map(data => (
        <tbody key={data.id_pengaduan}>
            <tr>
                <td>{data.nama_pengaduan}</td>
                <td>{data.email_pengaduan}</td>
                <td>{data.isi_pengaduan}</td>
                <td>{data.tanggal_pengaduan}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => props.hapus(data.id_pengaduan)} >HAPUS</button>
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
                        <th>ISI</th>
                        <th>TANGGAL</th>
                        <th>AKSI</th>
                    </tr>
                </thead>
               {ListReview}
            </table>
        </div>
    )
}


export default PengaduanComponent