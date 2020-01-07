import React from 'react'

const WisataComponent = (props) => {
    const DWisata = props.data.map(data => (
        <tbody key={data.id_wisata}>
            <tr>
                <td>{data.nama_wisata}</td>
                <td>{data.tanggal_wisata}</td>
                <td>{data.map_wisata}</td>
                <td></td>
                <td>
                    <a className="btn btn-info">SHOW</a>
                    <a className="btn btn-warning">DELETE</a>
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