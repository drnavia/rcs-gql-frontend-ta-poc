import React, { Component, Fragment } from 'react';

import PanelBar from './PanelBar';
import PieChart1 from './PieChart1';
import PieChart1Det from './PieChart1Det';
import PieChart2 from './PieChart2';
import PieChart2Det from './PieChart2Det';
import BroadcastDet from './BroadcastDet';

class Broadcast extends Component {
    state = {  }
    render() {

        // Tomar el ID del contacto a editar
        const { id } = this.props.match.params;
        console.log(id)

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
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-left">
                                <PanelBar />
                            </div>
                            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">

                                <div className="row mb-2">
                                    <div className="div-bctable col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left">
                                        <BroadcastDet bid={this.props.match.params} /> 
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 piedock1 text-center">
                                        <p className="mt-2 text-light"><strong>Cantidad Respuestas</strong></p>
                                        <PieChart1 bid={this.props.match.params} />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row piedock1list">
                                            <PieChart1Det bid={this.props.match.params} />
                                        </div>
                                        <div className="row piedock2list">
                                            <PieChart2Det bid={this.props.match.params} />
                                        </div>
                                    </div>
                                    <div className="col-md-4 piedock2 text-center">
                                        <p className="mt-2 text-light"><strong>Cantidad Rtas. Completadas</strong></p>
                                        <PieChart2 bid={this.props.match.params} />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
};

export default Broadcast;