import React from 'react';
import NavBar from "../components/Navbar" 
import logo from "../imgs/badge-header.svg"
import "./styles/BadgeNews.css"
import Badge from "../components/badge"
import BadgeForm from "../components/BadgeForm"

class BadgeNew extends React.Component {
    state = { form:{
        firstName:"",
        lastName:"",
        email:"",
        job:""
    } }

    handleChange = e =>{
        this.setState(
            {
                form:{
                    ...this.state.form,
                    [e.target.name]:e.target.value,
                }
            })
    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="BadgeNew__hero">
                    <figure >
                        <img className="img-fluid" src={logo} alt="Logo" />
                    </figure>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                             parrafo="proximamente un frontend developer"
                             pie="Platzi conf"
                             nombre={this.state.form.firstName}
                             apellido={this.state.form.lastName}
                             img="http:\/\/2.gravatar.com\/avatar\/23fd5ee5230c0e49b36e5a3d822c9e90"
                        />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>      
                </div>  
            </div> 
        )}
}

export default BadgeNew;