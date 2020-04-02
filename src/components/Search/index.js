import React from 'react';
import './index.css';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

let songLyrics = [];

//AntD Form Layout Declaration
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 12 },
  };

//The main function which will be exported

function Search() {
    //Declaring the form itself as it's own entity
    //for manipulation

    const [form] = Form.useForm();
    //Declaring useStates for the artist and song
    const [currentArtist, setCurrentArtist] = React.useState("");
    const [currentSong, setCurrentSong] = React.useState("");

    //Declaring useSate for Lyrics
    const [currentLyrics, setCurrentLyrics] = React.useState([]);

    //Fetching the Lyrics from the lyrics.ovh API

    const fetchLyrics = () => {
        //passing through API promise using http client axios
        console.log('Fetching Lyrics')
        const request = axios.get(
          `https://api.lyrics.ovh/v1/${currentArtist}/${currentSong}`
        );
    
        //When the api has done its thing, set the Lryics to what was passed
        request.then(response => {
            //Temporary: Outputs it all bluz
            songLyrics = response.data.lyrics.split("\n");
            console.log("songLyrics Array", songLyrics);

        });
      };

    //Function to create P of lyric


    const InsertP = (string, index) => {
        console.log("String and Index", string, index);
        return (
            <>
                {string}
            </>
            );

    

    };


    //Clearing the useStates of all and the Lyrics

    const onReset = () => {
        setCurrentArtist("");
        setCurrentSong("");
        setCurrentLyrics("");
        form.resetFields();
    };

    return (
        <div>
            <Form
                {...layout}
                name="basic"
                form={form}
            >
                <Form.Item
                label="Artist"
                name="Artist"
                value={currentArtist}
                rules={[{ required: true, message: 'Please enter an artist name!' }]}
                onChange={event => {
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
                onChange={event => {
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
                <div id="lyrics">{songLyrics.map(InsertP)}</div>

                 <br />
            </div>
        </div>


    )
}


export default Search;
