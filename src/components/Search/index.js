import React from 'react';
import './index.css';
import axios from 'axios';
import { Form, Input, Button, Spin, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

//AntD Form Layout Declaration
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

//AntD Spinning Icon
const loadIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

//The main function which will be exported

function Search() {
  //Declaring the form itself as it's own entity
  //for manipulation

  const [form] = Form.useForm();
  //Declaring useStates for the artist and song
  const [currentArtist, setCurrentArtist] = React.useState('');
  const [currentSong, setCurrentSong] = React.useState('');

  //Declaring useState for Lyrics
  const [currentLyrics, setCurrentLyrics] = React.useState([]);

  //Declaring useState for Loading
  const [notLoading, setNotLoading] = React.useState(true);

  // Success and Faliure Messages
  const successMessage = () => {
    message.success('Lyrics Loaded Successfully!');
  };

  const faliureMessage = () => {
    message.error(
      "Oop... Looks like this song doesn't exist. Plz check your spelling."
    );
  };

  const emptyMessage = () => {
    message.warning(
      "Wait! Looks like you've left one of (or both) boxes empty, please fill them in!"
    );
  };
  //Fetching the Lyrics from the lyrics.ovh API

  const fetchLyrics = () => {
    setNotLoading(false);
    //passing through API promise using http client axios
    console.log('Fetching Lyrics');
    const request = axios.get(
      `https://api.lyrics.ovh/v1/${currentArtist}/${currentSong}`
    );

    //When the api has done its thing, set the Lryics to what was passed
    request.then((response) => {
      setCurrentLyrics(response.data.lyrics.split('\n'));
      setNotLoading(true);
      console.log('New Current Lyrics Array', currentLyrics);
      successMessage();
    });

    //If there is the error, then the API displays error messages
    request.catch((error) => {
      if (currentSong == '' || currentArtist == '') {
        emptyMessage();
      } else {
        faliureMessage();
      }
      setNotLoading(true);
    });
  };

  //Function to create link break of lyric
  const lineBreak = (string, index) => {
    console.log('String and Index', string, index);
    return (
      <>
        <br />
        {string}
      </>
    );
  };

  //Clearing the useStates of all and the Lyrics

  const onReset = () => {
    setCurrentArtist('');
    setCurrentSong('');
    setCurrentLyrics([]);
    form.resetFields();
    // window.location.reload(false);
  };

  return (
    <div>
      <Form {...layout} name="basic" form={form}>
        <Form.Item
          label="Artist"
          name="Artist"
          value={currentArtist}
          rules={[{ required: true, message: 'Please enter an artist name!' }]}
          onChange={(event) => {
            setCurrentArtist(event.target.value);
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Song"
          name="song"
          value={currentSong}
          rules={[{ required: true, message: 'Please enter a song name!' }]}
          onChange={(event) => {
            setCurrentSong(event.target.value);
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={fetchLyrics}>
            Go
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>

      <div>
        <br />
        <div id="lyrics">
          {notLoading ? (
            currentLyrics.map(lineBreak)
          ) : (
            <Spin indicator={loadIcon} tip="Grabbing Lyrics" />
          )}
        </div>
        <br />
      </div>
    </div>
  );
}

export default Search;
