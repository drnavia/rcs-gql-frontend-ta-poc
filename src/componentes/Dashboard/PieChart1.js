import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { CANT_RESPUESTAS } from '../../queries/queries';

// PIECHART
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#C71585', '#B8860B', '#6B8E23', '#0000CD'];
//              rojo      amarillo    verde       azul
const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class PieChat1 extends Component {
    state = {  }
    render() {

        const { id } = this.props.bid;
        console.log('BID1', id)

        return (
            
            <Query query={CANT_RESPUESTAS} pollInterval={1000} variables={{id}}>
                
                {({loading, error, data, startPolling, stopPolling}) => {
                    if(loading) return 'Cargando...';
                    if(error) return `Error ${error.message}`;

                    console.log('PieChart1', data);

                    const cantRtasGrafica = []

                    data.getCantRespuetas.map((campo, index) => {
                        return cantRtasGrafica[index] = {
                            BId:  campo.BId,
                            name:  campo.RtasHasta,
                            value: campo.CantRtas
                        }
                    });

                    console.log('DataPie1', cantRtasGrafica);
                    console.log('BID_IN1', id)
                    
                    function filtrarId(pros) { 
                        return pros.BId == id;
                    }

                    const cantRtasGraficaPie = cantRtasGrafica.filter(filtrarId);

                    console.log(cantRtasGraficaPie);
                    // { nombre: 'cerezas', cantidad: 5 }
                   
                    return (
                        <PieChart width={220} height={210}>
                            <Pie
                                data={cantRtasGraficaPie} 
                                cx={115} 
                                cy={100} 
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80} 
                                fill="#8884d8"
                                dataKey="value"
                                >
                                {
                                    cantRtasGraficaPie.map((entry, index) => <Cell key={entry.toString()} fill={COLORS[index % COLORS.length]}/>)
                                }
                            </Pie>
                            
                            <Tooltip 
                                wrapperStyle={{backgroundColor: '#ccc' }} 
                                formatter={(value) => new Intl.NumberFormat('en').format(value)}
                            />
                        </PieChart>
                    )
                }}
            </Query>
        );
    }
}

export default PieChat1;