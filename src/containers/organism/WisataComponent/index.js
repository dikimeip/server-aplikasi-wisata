import React from 'react'
import { Link } from 'react-router-dom'

const WisataComponent = (props) => {
    const DWisata = props.data.map(data => (
        <tbody key={data.id_wisata}>
            <tr>
                <td>{data.nama_wisata}</td>
                <td>{data.tanggal_wisata}</td>
                <td>{data.map_wisata}</td>
                <td></td>
                <td>
                    <Link className="btn btn-info" to={"/showWis/"+data.id_wisata} >SHOW</Link>
                    <button className="btn btn-warning" onClick={() => props.hapus(data.id_wisata)} >HAPUS</button>
                </td>
            </tr>
        </tbody>

    ))

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>NAMA WISATA</th>
                    <th>TANGGAL</th>
                    <th>MAPS</th>
                    <th>FOTO</th>
                    <th>AKSI</th>
                </tr>
            </thead>
            {DWisata}
        </table>
    )
}

export default WisataComponent