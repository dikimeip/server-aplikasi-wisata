import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-haeder">
                    <Link to="/home" className="navbar-brand" > HOME</Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/wisata" >WISATA</Link></li>
                        <li><Link to="/news" >BERITA</Link></li>
                        <li><Link to="" >REVIEW</Link></li>
                        <li><Link to="" >KONTAK</Link></li>
                        <li><Link to="" >PENGADUAN</Link></li>
                        <li><Link to="" >KOMENTAR</Link></li>
                        <li><Link to="" >LOGOUT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar