import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const BeritaComponent = (props) => {
    const ListBerita = props.data.map(data => (
        <tbody key={data.id_berita}>
            <tr>
                <td>{data.judul_berita}</td>
                <td>{data.author_berita}</td>
                <td>{data.tanggal_berita}</td>
                <td></td>
                <td>
                    <Link className="btn btn-info" >EDIT</Link>
                    <Link className="btn btn-warning" >HAPUS</Link>
                </td>
            </tr>
        </tbody>
    ))
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>JUDUL</th>
                        <th>AUTHOR</th>
                        <th>TANGGAL</th>
                        <th>FOTO</th>
                        <th>AKSI</th>
                    </tr>
                </thead>
                {ListBerita}
            </table>
        </div>
    )
}


export default BeritaComponent