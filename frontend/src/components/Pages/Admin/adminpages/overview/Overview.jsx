import "./Chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';



export default function Chart({title,data,dataKey,grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1 } >
              <h1> Api thama hodatama kale</h1>


            </ResponsiveContainer>
        </div>
    );
}