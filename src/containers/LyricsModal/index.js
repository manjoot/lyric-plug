import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

import { Modal } from 'antd';

function LyricsModal(props) {
  //Declaring useState for Lyrics
  const [currentLyrics, setCurrentLyrics] = React.useState([]);
  //Declaring useState for visibility of modal
  const [ModalVisible, setModalVisiblity] = useState(false);

  const handleCancel = (e) => {
    setCurrentLyrics([]);
    setModalVisiblity(false);
  };

  //passing through API promise using http client axios
  console.log('Fetching Lyrics');
  const request = axios.get(`https://api.lyrics.ovh/v1/dababy/bop`);

  //When the api has done its thing, set the Lryics to what was passed
  request.then((response) => {
    setCurrentLyrics(response.data.lyrics.split('\n'));
    console.log('New Current Lyrics Array', currentLyrics);
  });

  const lineBreak = (string, index) => {
    console.log('String and Index', string, index);
    return (
      <>
        <br />
        {string}
      </>
    );
  };

  return (
    <div>
      <Modal
        title={props.title}
        visible={ModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <div>
          <br />
          <div id="lyrics">{currentLyrics.map(lineBreak)}</div>
          <br />
        </div>
      </Modal>
    </div>
  );
}

export default LyricsModal;
