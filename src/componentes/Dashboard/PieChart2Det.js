import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { CANT_RTAS_COMP } from '../../queries/queries';

class PieCha2Det extends Component {
    state = {  }
    render() {

        const { id } = this.props.bid;
        console.log('BID2Det', id)

        return (
            
            <Query query={CANT_RTAS_COMP} pollInterval={1000} variables={{id}}>
                
                {({loading, error, data, startPolling, stopPolling}) => {
                    if(loading) return 'Cargando...';
                    if(error) return `Error ${error.message}`;

                    console.log('PieChart2Det', data);

                    const cantRtasCompGrafica = []

                    data.getCantRtasComps.map((campo, index) => {
                        return cantRtasCompGrafica[index] = {
                            BId:   campo.Bid,
                            name:  campo.descrip,
                            value: campo.CantRtasComp,
                            total: campo.CantLineas
                        }
                    });

                    console.log('DataPie2Det', cantRtasCompGrafica);
                    console.log('BID_IN2Det', id)
                    
                    function filtrarId(pros) { 
                        return pros.BId == id;
                    }

                    const cantRtasCompGraficaPie = cantRtasCompGrafica.filter(filtrarId);

                    console.log('Det2', cantRtasCompGraficaPie);
                    // { nombre: 'cerezas', cantidad: 5 }

                    return (
                        <Fragment>
                            <div className="div-table mt-2">
                                <div className="div-table-row col-12">
                                    <div className="div-table-col col-8"><strong>Leyenda</strong></div>
                                    <div className="div-table-col col-2"><strong>Q</strong></div>
                                    <div className="div-table-col col-2"><strong>%</strong></div>
                                </div>

        
                                {cantRtasCompGraficaPie.map(item => {
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

export default PieCha2Det;