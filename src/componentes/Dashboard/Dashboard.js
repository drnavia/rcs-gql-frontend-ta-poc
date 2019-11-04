import React, { Component, Fragment } from 'react';

import BroadcastCant from './BroadcastCant';
import BroadcastGrid from './BroadcastGrid';

class Broadcast extends Component {
    state = {  }
    
    render() {

        var today = new Date();
        var quarter = Math.floor((today.getMonth() + 3) / 3); 
        var year = today.getFullYear();

        return (
            <Fragment>
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <h2 className="text-light">Broadcast RCS</h2>
                            </div>
                            <div className="col-6 text-right">
                                <h3 className="text-light">Q{quarter} / {year}</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <BroadcastCant /> 
                            </div>
                        </div>
                    </div>
                        
                    <div className="container mt-3">
                        <h5>Detalle de Broadcast</h5>
                        <BroadcastGrid /> 
                    </div>
                </div>

            </Fragment>
        );
    }
};

export default Broadcast;