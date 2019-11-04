import React, {Fragment} from 'react';

import logoRCShome from '../Layout/img/rcs-home.png';


const Inicio = () => {
    return ( 
        <Fragment>
            <div className="wrapper">
                <div className="container" style={{height: 620}}>
                  <img src={logoRCShome} className="img-fluid" alt="RCS"/>
                </div>
            </div>
        </Fragment>
    );
}

export default Inicio;