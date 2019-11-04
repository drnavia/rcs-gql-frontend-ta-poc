import React from 'react';
import { Query } from 'react-apollo';
import { CANT_RESPUESTAS } from '../../queries/queries';

//BARCHART
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const Clientes = () => {
    return ( 
        <Query query={CANT_RESPUESTAS} variables={{id}}>
            {({loading, error, data}) => {
                if(loading) return 'Cargando...';
                if(error) return `Error ${error.message}`;
                
                console.log(data);

                const cantRtasGrafica = []

                data.getCantRespuetas.map((campo, index) => {
                    return cantRtasGrafica[index] = {
                        name:  campo.RtasHasta,
                        value: campo.CantRtas
                    }
                });

                console.log(cantRtasGrafica);

                return (
                    <BarChart  
                        width={800} 
                        height={300} 
                        data={cantRtasGrafica} 
                        margin={{top: 5, right: 20, left: 10, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip
                            wrapperStyle={{ backgroundColor: "red" }}
                            labelStyle={{ color: "black" }}
                            itemStyle={{ color: "blue" }}
                            formatter={function(value, name) {
                                return `${value}`;
                            }}
                            labelFormatter={function(value) {
                                return `Barra: ${value}`;
                            }}
                            // formatter={(value) => new Intl.NumberFormat('en').format(value)}
                        />
                        <Legend />
                        <Bar dataKey="value" fill="#4169E1" type="monotone" />
                    </BarChart>
                )
            }}
        </Query>
    );
};

export default Clientes;