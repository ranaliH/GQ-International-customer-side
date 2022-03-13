import "./Chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import Empdata from '../../../../modules/AdminPageModules/Employee/EmployeeDtails';
import Empedit from "../../../../modules/AdminPageModules/Employee/EditEmployee";
import React from "react";


export default function Edet({title,data,dataKey,grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1 } >
                {/* <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
            </LineChart>)*/}

                <Empdata/>

            </ResponsiveContainer>
        </div>
    );
}
