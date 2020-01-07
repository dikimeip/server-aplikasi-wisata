import React, { Component } from 'react'

const KomentarComponent = (props) => {
    const ListReview = props.data.map(data => (
        <tbody key={data.id_komentar}>
            <tr>
                <td>{data.nama_komentar}</td>
                <td>{data.email_komentar}</td>
                <td>{data.isi_komentar}</td>
                <td>{data.tanggal_komentar}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => props.hapus(data.id_komentar)} >HAPUS</button>
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


export default KomentarComponent