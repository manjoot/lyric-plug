import React from 'react';
import './index.css';
import axios from 'axios';

//Declaring antd import
import { List, Typography, Divider } from 'antd';

//Declaring TestData for table
const data = [
    '1. Blinding Lights - The Weeknd',
    '2. Roses (Imanbek Remix) - SAINt JHN',
    '3. Physical - Dua Lipa',
    '4. Dont Start Now - Dua Lipa',
    '5. Lonely - Joel Corry',
  ];

function Charts() {

    //Declaring useState for current recieved charts list (from API)
    const [currentChart, setCurrentChart] = React.useState([]);

    //Fetching the chart from API
    const fetchCharts = () => {
        //Passing through API using axios http client
        console.log("Fetching Current Charts");
        const request = axios.get(
            `https://30-000-radio-stations-and-music-charts.p.rapidapi.com/rapidapi`
        );

        //When the API has fetched the chart, then console.log it
        request.then(response => {
            //Console.log what is coming through the api
            setCurrentChart(response.data)
            console.log("Here's what current chart looks like:", currentChart);
        })
    }
    return (
        <div>
            {/* Charts Placeholder */}
            <Divider orientation="left">Current Top 5</Divider>
            <List
                size="large"
                header={<div>UK Charts</div>}
                footer={<div>*data from Apple Music*</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />    

            {/* (TESTING ONLY) Test API Button */}
            <br />
            <button onClick ={fetchCharts}>Click to test API</button>

        </div>
    );
}

export default Charts;