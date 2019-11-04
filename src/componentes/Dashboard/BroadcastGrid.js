import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { BROADCAST } from '../../queries/queries';

import { Link } from 'react-router-dom';

class BroadcastDet extends Component {
    state = {  }
    render() {

        return (
            
            <Query query={BROADCAST} pollInterval={1000}>
                            
                {({ loading, error, data, startPolling, stopPolling }) => {
                    if(loading) return "Cargando...";
                    if(error) return `Error: ${error.message}`;

                    console.log('BroadcastGrid', data);

                    return (
                        <Fragment>
                            <table className="table table-hover">
                                <thead className="bg-success text-light">
                                    <tr className="table-primary">
                                        <th scope="row" id="thpanel">Broadcast</th>
                                        <th scope="col" id="thpanel">Fecha Ini</th>
                                        <th scope="col" id="thpanel">Hora Ini</th>
                                        <th scope="col" id="thpanel">Fecha Fin</th>
                                        <th scope="col" id="thpanel">Hora Fin</th>
                                        <th scope="col" id="thpanel">QLineas</th>
                                        <th scope="col" id="thpanel">Remitente</th>
                                        <th scope="col" id="thpanel">Logica</th>
                                        <th scope="col" id="thpanel">TipoAgente</th>
                                        <th scope="col" id="thpanel">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.getBroadcast.map(item => {
                                        //const {id} = item;
                                        return (
                                            <tr key={item.BId}>
                                                        
                                                <td id="tdpanel" className="align-middle">
                                                    <Link to={`/dashboard/broadcast/${item.BId}`}>
                                                        <span className="badge badge-light badge-pill">#{item.BId}</span> <strong>{item.Name}</strong>
                                                    </Link>
                                                </td>
                                                <td id="tdpanel" className="align-middle">{item.FechaIn}</td>
                                                <td id="tdpanel" className="align-middle">{item.Tin}</td>
                                                <td id="tdpanel" className="align-middle">{item.FechaOut}</td>
                                                <td id="tdpanel" className="align-middle">{item.Tout}</td>
                                                <td id="tdpanel" className="align-middle">
                                                    <span className="badge badge-light badge-pill">{item.Lineas}</span>
                                                </td>
                                                <td id="tdpanel" className="align-middle">{item.Remitente}</td>
                                                <td id="tdpanel" className="align-middle">{item.Logica}</td>
                                                <td id="tdpanel" className="align-middle">{item.TipoAgente}</td>
                                                <td id="tdpanel" className="align-middle">
{/*                                                                 { item.Estado == 'Enviada'
                                                        ? <span className="badge badge-success">{item.Estado}</span>
                                                        : <span className="badge badge-danger">{item.Estado}</span>
                                                    } */}
                                                    {(function() {
                                                        switch(item.Estado) {
                                                        case 'Por Enviar':
                                                            return <span className="badge badge-info">{item.Estado}</span>;
                                                        case 'Enviando':
                                                            return <span className="badge badge-warning">{item.Estado}</span>;
                                                        case 'Enviada':
                                                            return <span className="badge badge-success">{item.Estado}</span>;
                                                        case 'Desactivada':
                                                            return <span className="badge badge-light">{item.Estado}</span>;
                                                        case 'Detenida':
                                                            return <span className="badge badge-danger">{item.Estado}</span>;
                                                        default:                        
                                                            return null;
                                                        }
                                                    })()}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                        </Fragment>
                        )
                }}
            </Query>
        );
    }
}

export default BroadcastDet;