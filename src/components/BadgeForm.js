import React from 'react';

class BadgeForm extends React.Component {


    handleClick = (e) =>{
        
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("formulario ")
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <h1> Titulo </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label  >First Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control"  
                        type="text" name="firstName"
                        value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label  >Last Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control"  
                        type="text" name="lastName" 
                        value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label  >Email</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control"  
                        type="email" name="email" 
                        value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label  >Job Title</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control"  
                        type="text" name="job" 
                        value={this.props.formValues.job}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;