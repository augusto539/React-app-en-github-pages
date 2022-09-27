import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 2400, amt: 2400}];

const Data = [{name: 'Page A', uv: 400}, {name: 'Page B', uv: 236}];

export default function Charts() {
    const [data, setdata] = useState([{name: 1, uv: 400},{name: 2, uv: 500}])
    let dataSet = []
    

    useEffect(() => {
        dataSet = data
    }, [data])
    //console.log({name: dataSet[dataSet.length -1].name + 1, uv: dataSet[dataSet.length -1].uv + 100})
    return (
        <>
        <h1> kk </h1>

        {console.log(data)}

        <LineChart width={400} height={400} data={dataSet}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>

        <button onClick={() => {
            setdata({name: dataSet[dataSet.length -1].name + 1, uv: dataSet[dataSet.length -1].uv + 100})
        }} > sumar valor</button>
        </>
    )
}