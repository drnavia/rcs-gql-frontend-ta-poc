import React from 'react';
import { Link } from 'react-router-dom';
import logoRcs from './img/rcs.png';
import logoGraphql from './img/graphql.png';
import logoTecoLabs from './img/telecom-labs.png';

const Header = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4">
        <div className="container">
            <Link to="/"><img src={logoRcs} alt="RCS"/> </Link>
            <Link to="/dashboard" className="navbar-brand text-light font-weight-normal">
                <button className="btn btn-primary my-22 my-sm-0" type="submit">Dashboard</button>
            </Link>


            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown mr-md-2 ml-3 mb-2 mb-md-0">
                        <img src={logoGraphql} alt="GraphQL"/>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item dropdown mr-md-2 mb-2 mb-md-0">
                        <img src={logoTecoLabs} alt="Telecom Labs"/>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
