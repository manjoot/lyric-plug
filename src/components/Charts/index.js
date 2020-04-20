import React from 'react';
import './index.css';
import axios from 'axios';

//Declaring antd import
import { Table } from 'antd';
import { Select } from 'antd';

// Option component for each dropdown from antd
const { Option } = Select;

// Handles the change in a dropdown value (from Antd)

function handleChange(value) {
  console.log(`selected ${value}`);
}

// Column structure of table
const columns = [
  {
    title: 'Position',
    dataIndex: 'position',
    sorter: {
      compare: (a, b) => a.position - b.position,
      multiple: 3,
    },
  },
  {
    title: 'Song',
    dataIndex: 'track_name',
  },
  {
    title: 'Name',
    dataIndex: 'artist_name',
  },
  {
    title: 'Album',
    dataIndex: 'album_name',
  },
];

const testData = [
  {
    // key: '1',
    position: '1',
    track_name: 'Blinding Lights',
    artist_name: 'The Weeknd',
    album_name: 'After Hours',
  },
  {
    position: '2',
    key: '2',
    track_name: "We'll Meet Again",
    artist_name: 'Vera Lynn feat. Katherine Jenkins',
    album_name: 'National Treasure - The Ultimate Collection',
  },
  {
    position: '3',
    key: '3',
    track_name: 'Roses',
    artist_name: 'SAINt JHN',
    album_name: 'Collection One',
  },
  {
    position: '4',
    key: '4',
    track_name: 'Falling',
    artist_name: 'Harry Styles',
    album_name: 'Fine Line',
  },
  {
    position: '5',
    key: '5',
    track_name: 'Physical',
    artist_name: 'Dua Lipa',
    album_name: 'Future Nostalgia',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function Charts() {
  //Declaring useState for current recieved charts list (from API)
  const [currentChart, setCurrentChart] = React.useState([]);
  const [currentRegion, setCurrentRegion] = React.useState([]);

  const data = [currentChart];

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
      console.log(
        "Here's what the API is giving to us:",
        response.data.message.body.track_list
      );
      setCurrentChart(response.data.message.body.track_list);
      console.log("Here's what current UK charts looks like:", currentChart);
    });
  };
  return (
    <div>
      {/* Region Dropdown */}
      <Select defaultValue="gb" style={{ width: 120 }} onChange={handleChange}>
        <Option value="gb">United Kingdom</Option>
        <Option value="us">United States</Option>
        <Option value="it">Italy</Option>
      </Select>

      {/* Charts Table */}
      <Table
        columns={columns}
        dataSource={testData}
        style={{ paddingTop: '25px' }}
        onChange={onChange}
        pagination={{ pageSize: 20 }}
      />

      {/* TESTING ONLY - fetchCharts Test */}
      {/* <br />
      <button onClick={fetchCharts}>Click to test API</button> */}
    </div>
  );
}

export default Charts;
