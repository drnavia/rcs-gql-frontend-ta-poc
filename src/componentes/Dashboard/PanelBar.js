import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { BROADCAST_LAST } from '../../queries/queries';
import { Link } from 'react-router-dom';

const PanelBar = () => {
    return ( 
        <Query query={BROADCAST_LAST} pollInterval={1000}>
            
            {({ loading, error, data, startPolling, stopPolling }) => {
                if(loading) return "Cargando...";
                if(error) return `Error: ${error.message}`;

                console.log('PanelBar', data);

                return (
                    <Fragment>
                        <table className="table table-hover">
                            <thead className="bg-success text-light">
                                <tr className="table-primary">
                                    <th scope="col" id="thpanel">Broadcast</th>
                                    <th scope="col" id="thpanel" className="text-right">Estado</th>
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
                                            <td id="tdpanel" className="align-middle text-right">
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
};

export default PanelBar;