import React from 'react';
import logo from "../imgs/badge-header.svg"
import "./styles/NavBar.css"

class Nav extends React.Component {
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand"> 
                        <figure>
                            <img className="Navbar__brand-logo" src={logo} alt="logo" ></img>
                        </figure>
                        <span className="" >Platzi</span>
                        <span className="" >Conf</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Nav;