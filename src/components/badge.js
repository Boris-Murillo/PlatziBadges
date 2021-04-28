import React from 'react';
import confLogo from "../imgs/logo.svg"
import "./styles/Badge.css"

class Badge extends React.Component {
    render(){
        // this.props;
        return(
            <div className="Badge">
                <header className="Badge__header">
                    <figure>
                        <img src={confLogo}></img>
                    </figure>
                </header>
                <main>
                    <section className="Badge__section-name">
                        <figure  >
                            <img  
                                className="Badge__avatar"
                                 src={this.props.img}
                                >
                            </img>
                        </figure>
                        <h1>{this.props.nombre}<br/>{this.props.apellido}</h1>
                    </section>
                    <section className="Badge__section-info">
                        <h3>
                            {this.props.parrafo} 
                        </h3>
                    </section>
                </main>
                <footer className="Badge__footer">
                    <a>#{this.props.pie}</a>
                </footer>
            </div>
        )
    }
}

export default Badge;