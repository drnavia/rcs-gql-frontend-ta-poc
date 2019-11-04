import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { BROADCAST } from '../../queries/queries';

class BroadcastDet extends Component {
    state = {  }
    render() {

        const { id } = this.props.bid;
        console.log('BID1BDDet', id)

        return (
            
            <Query query={BROADCAST} pollInterval={1000} variables={{id}}>
                
                {({loading, error, data, startPolling, stopPolling}) => {
                    if(loading) return 'Cargando...';
                    if(error) return `Error ${error.message}`;

                    console.log('BroadcastDet', data);

                    const cantBroadcast = []

                    data.getBroadcast.map((campo, index) => {
                        return cantBroadcast[index] = {
                            BId:   campo.BId,
                            name:  campo.Name,
                            fechain:  campo.FechaIn,
                            fechaout: campo.FechaOut,
                            tin:   campo.Tin,
                            tout:  campo.Tout,
                            cantlineas: campo.Lineas,
                            remitente: campo.Remitente,
                            logica: campo.Logica,
                            tipoagente: campo.TipoAgente,
                            estado: campo.Estado

                        }
                    });

                    console.log('BDDet', cantBroadcast);
                    console.log('BID_BDDet', id)
                    
                    function filtrarId(pros) { 
                        return pros.BId == id;
                    }

                    const cantBroadcastPie = cantBroadcast.filter(filtrarId);

                    console.log('DetBD', cantBroadcastPie);
                    // { nombre: 'cerezas', cantidad: 5 }

                    return (
                        <div className="col-12 div-tablebc mt-2">
                            {cantBroadcastPie.map(item => {
                                return (
                                    <div key={item.BId} className="row">
                                        
                                        <div className="col-12 div-tablebc-row">
                                            <div className="div-tablebc-col col-8">
                                                <h4 className='text-light'><span className="badge badge-light badge-pill">#{item.BId}</span> {item.name}</h4>
                                            </div>
                                            <div className="div-tablebc-col col-4 text-right">

                                                {(function() {
                                                        switch(item.estado) {
                                                        case 'Por Enviar':
                                                            return <span className="badge badge-info">{item.estado}</span>;
                                                        case 'Enviando':
                                                            return <span className="badge badge-warning">{item.estado}</span>;
                                                        case 'Enviada':
                                                            return <span className="badge badge-success">{item.estado}</span>;
                                                        case 'Desactivada':
                                                            return <span className="badge badge-light">{item.estado}</span>;
                                                        case 'Detenida':
                                                            return <span className="badge badge-danger">{item.estado}</span>;
                                                        default:                        
                                                            return null;
                                                        }
                                                    })()}


                                            </div>
                                        </div>
                                        <div className="col-lg-12 div-tablebc-row">
                                            <div className="div-tablebc-col col-3">Fecha Inicio</div>
                                            <div className="div-tablebc-col col-3">Hora Inicio</div>
                                            <div className="div-tablebc-col col-3">Fecha Fin</div>
                                            <div className="div-tablebc-col col-3">Hora Fin</div>

                                        </div>
                                        <div className="col-lg-12 div-tablebc-row">
                                            <div className="div-tablebc-col col-3"><span className="text-light">{item.fechain}</span></div>
                                            <div className="div-tablebc-col col-3"><span className="text-light">{item.tin}</span></div>
                                            <div className="div-tablebc-col col-3"><span className="text-light">{item.fechaout}</span></div>
                                            <div className="div-tablebc-col col-3"><span className="text-light">{item.tout}</span></div>

                                        </div>
                                        <div className="col-lg-12 div-tablebc-row">
                                            <div className="div-tablebc-col col-3">Remitente</div>
                                            <div className="div-tablebc-col col-3">Logica</div>
                                            <div className="div-tablebc-col col-3">Tipo de Agente</div>
                                            <div className="div-tablebc-col col-3">Cant. Lineas</div>
                                        </div>
                                        <div className="col-lg-12 div-tablebc-row">
                                            <div className="div-tablebc-col col-3"><span className="text-light">{item.remitente}</span></div>
                                            <div className="div-tablebc-col col-3"><span className="text-light">{item.logica}</span></div>
                                            <div className="div-tablebc-col col-3"><span className="text-light">{item.tipoagente}</span></div>
                                            <div className="div-tablebc-col col-3"><span className="text-light">{item.cantlineas}</span></div>
                                        </div>
                                        </div>
                                )
                            })}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default BroadcastDet;