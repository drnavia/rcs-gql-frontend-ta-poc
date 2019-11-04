import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { CANT_RESPUESTAS } from '../../queries/queries';

class PieChat1Det extends Component {
    state = {  }
    render() {

        const { id } = this.props.bid;
        console.log('BID1Det', id)

        return (
            
            <Query query={CANT_RESPUESTAS} pollInterval={1000} variables={{id}}>
                
                {({loading, error, data, startPolling, stopPolling}) => {
                    if(loading) return 'Cargando...';
                    if(error) return `Error ${error.message}`;

                    console.log('PieChart1Det', data);

                    const cantRtasGrafica = []

                    data.getCantRespuetas.map((campo, index) => {
                        return cantRtasGrafica[index] = {
                            BId:   campo.BId,
                            name:  campo.RtasHasta,
                            value: campo.CantRtas,
                            total: campo.CantLineas
                        }
                    });

                    console.log('DataPie1Det', cantRtasGrafica);
                    console.log('BID_IN1Det', id)
                    
                    function filtrarId(pros) { 
                        return pros.BId == id;
                    }

                    const cantRtasGraficaPie = cantRtasGrafica.filter(filtrarId);

                    console.log('Det1', cantRtasGraficaPie);
                    // { nombre: 'cerezas', cantidad: 5 }

                    return (
                        <Fragment>
                            <div className="div-table mt-2">
                                <div className="div-table-row col-12">
                                    <div className="div-table-col col-8"><strong>Leyenda</strong></div>
                                    <div className="div-table-col col-2"><strong>Q</strong></div>
                                    <div className="div-table-col col-2"><strong>%</strong></div>
                                </div>

        
                                {cantRtasGraficaPie.map(item => {
                                    return (
                                        <div key={item.name} className="div-table-row col-12">
                                            <div className="div-table-col col-8"><span className="text-light">{item.name}</span></div>
                                            <div className="div-table-col col-2"><span className="text-light">{item.value}</span></div>
                                            <div className="div-table-col col-2"><span className="text-light">{Math.round(item.value / item.total *100)}</span></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Fragment>
                    );
                }}
            </Query>
        );
    }
}

export default PieChat1Det;