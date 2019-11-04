import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { CANT_RTAS_COMP } from '../../queries/queries';

// PIECHART
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#6B8E23', '#0000CD', '#C71585', '#B8860B'];
//const COLORS = ['#C71585', '#B8860B', '#6B8E23', '#0000CD'];
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

class PieChat2 extends Component {
    state = {  }
    render() {

        const { id } = this.props.bid;
        console.log('BID2', id)

        return (
            
            <Query query={CANT_RTAS_COMP} pollInterval={1000} variables={{id}}>
                
                {({loading, error, data, startPolling, stopPolling}) => {
                    if(loading) return 'Cargando...';
                    if(error) return `Error ${error.message}`;

                    console.log('PieChart2', data);

                    const cantRtasCompGrafica = []

                    data.getCantRtasComps.map((campo, index) => {
                        return cantRtasCompGrafica[index] = {
                            BId:   campo.Bid,
                            name:  campo.descrip,
                            value: campo.CantRtasComp
                        }
                    });

                    console.log('DataPie2', cantRtasCompGrafica);
                    console.log('BID_IN2', id)
                    
                    function filtrarId(pros) { 
                        return pros.BId == id;
                    }

                    const cantRtasCompGraficaPie = cantRtasCompGrafica.filter(filtrarId);

                    console.log(cantRtasCompGraficaPie);
                    // { nombre: 'cerezas', cantidad: 5 }
                   
                    return (
                        <PieChart width={220} height={210}>
                            <Pie
                                data={cantRtasCompGraficaPie} 
                                cx={115} 
                                cy={100} 
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80} 
                                fill="#8884d8"
                                dataKey="value"
                                >
                                {
                                    cantRtasCompGraficaPie.map((entry, index) => <Cell key={entry.toString()} fill={COLORS[index % COLORS.length]}/>)
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

export default PieChat2;