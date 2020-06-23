import React from 'react';
import './_header.scss'

export default function Navbars() {
  return (
    <div>
      <header>
  <nav className="navbar navbar-expand-lg navbar-dark" id="myNavbar">
    <div className="logo">
      <a className="navbar-brand" href="#">
        <img src="https://png.pngtree.com/png-clipart/20190603/original/pngtree-number-1-png-image_204318.jpg" alt="logo-astronauts_3171372" />
      </a>
      LOGO
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="my-navbar collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#showTime">Lịch chiếu<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#cinema">Cụm rạp</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#info">Tin tức</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ứng dụng</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" data-toggle="modal" data-target="#elegantModalForm">Login</a>
        </li>
      </ul></div>
  </nav>
</header>
    </div>
  )
}


