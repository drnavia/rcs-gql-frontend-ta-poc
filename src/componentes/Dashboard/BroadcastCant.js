import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { BROADCAST_CANT } from '../../queries/queries';

class BroadcastDet extends Component {
    state = {  }
    render() {

        return (
            
            <Query query={BROADCAST_CANT} pollInterval={1000}>
                            
                {({ loading, error, data, startPolling, stopPolling }) => {
                    if(loading) return "Cargando...";
                    if(error) return `Error: ${error.message}`;

                    console.log('BroadcastCant', data);

                    return (
                        <div className="row d-flex justify-content-center">
                            
                            {data.getCantBroadcast.map(item => {
                                return (
                                <div key={item.Sent} className="col-3 text-center">
                                    <div className="percentage-container">

                                        {(function() {
                                            switch(item.Estado) {
                                            case 'Por Enviar':
                                                return (<div className="alert alert-info">
                                                            <span className="percentage-number">
                                                                {item.CantBroadcast}
                                                                <span className="percentage-sign">bc</span>
                                                            </span>
                                                            <h6>{item.Estado}</h6>
                                                        </div>);
                                            case 'Enviando':
                                                return (<div className="alert alert-warning">
                                                            <span className="percentage-number">
                                                                {item.CantBroadcast}
                                                                <span className="percentage-sign">bc</span>
                                                            </span>
                                                            <h6>{item.Estado}</h6>
                                                        </div>);
                                            case 'Enviada':
                                                return (<div className="alert alert-success">
                                                            <span className="percentage-number">
                                                                {item.CantBroadcast}
                                                                <span className="percentage-sign">bc</span>
                                                            </span>
                                                            <h6>{item.Estado}</h6>
                                                        </div>);
                                            case 'Detenida':
                                                return (<div className="alert alert-danger">
                                                            <span className="percentage-number">
                                                                {item.CantBroadcast}
                                                                <span className="percentage-sign">bc</span>
                                                            </span>
                                                            <h6>{item.Estado}</h6>
                                                        </div>);
                                            default:                        
                                                return null;
                                            }
                                        })()}
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                        )
                }}
            </Query>
        );
    }
}

export default BroadcastDet;