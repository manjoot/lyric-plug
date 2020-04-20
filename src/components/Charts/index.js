import React from 'react';
import './index.css';
import axios from 'axios';

//Declaring antd import
import { List, Select, Divider } from 'antd';
const { Option } = Select;

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
    //Configuring API Key to Axios
    const axiosConfig = {
      headers: {
        api_key: process.env.REACT_APP_TEST_VAR,
      },
    };

    //Passing through API using axios http client
    console.log('Fetching Current Charts', process.env.REACT_APP_TEST_VAR);
    const request = axios.get(
      //musixmatch - gets charts
      `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=gb&f_has_lyrics=1&apikey=${process.env.REACT_APP_TEST_VAR}`
      // axiosConfig
    );

    //When the API has fetched the chart, then console.log it
    request.then((response) => {
      //Console.log what is coming through the api
      console.log("Here's what current chart looks like:", response);
    });
  };
  return (
    <div>
      {/* Charts Placeholder */}
      <Divider orientation="left">Current Top 5</Divider>
      <List
        size="large"
        header={
          <div>
            <b>Region:</b> <br />
            <Select
              placeholder="Select a region to find the top charts there!"
              allowClear
            >
              <Option value="gb">UK</Option>
              <Option value="it">Italy</Option>
              <Option value="us">USA</Option>
            </Select>
          </div>
        }
        footer={<div>*data from Apple Music*</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />

      {/* (TESTING ONLY) Test API Button */}
      <br />
      <button onClick={fetchCharts}>Click to test API</button>
    </div>
  );
}

export default Charts;
