import React from 'react';
import './index.css';
import LyricsModal from './../../containers/Modal/index';
import axios from 'axios';
import { Card } from 'antd';

//Antd declaration to support more flexible content
const { Meta } = Card;

function OurPicks() {
  //Declaring useStates for the artist and song
  const [currentArtist, setCurrentArtist] = React.useState('');
  const [currentSong, setCurrentSong] = React.useState('');

  //Declaring useState for Lyrics
  const [currentLyrics, setCurrentLyrics] = React.useState([]);

  //API Call
  const fetchLyrics = (artist, song) => {
    //passing through API promise using http client axios
    console.log('Fetching Lyrics');
    setCurrentArtist(artist);
    setCurrentSong(song);
    const request = axios.get(
      `https://api.lyrics.ovh/v1/${currentArtist}/${currentSong}`
    );

    //When the api has done its thing, set the Lryics to what was passed
    request.then((response) => {
      setCurrentLyrics(response.data.lyrics.split('\n'));
      console.log('New Current Lyrics Array', currentLyrics);
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

  //Function that takes props through and displays a modal

  // Return Statement
  return (
    <div className="card-container">
      <Card
        hoverable
        className="card-item"
        onClick={console.log('clicked')}
        cover={
          <img
            alt="DaBaby"
            src="https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_600/Dababy_BabyOnBaby.jpg"
          />
        }
      >
        <Meta title="BOP - DaBaby" />
      </Card>
      <Card
        hoverable
        className="card-item"
        cover={
          <img
            alt="Billie Eilish"
            src="https://images.squarespace-cdn.com/content/v1/593070a42994cad2710a6439/1549097156800-NS0LICAP3V3IYW276GDX/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/j.png"
          />
        }
      >
        <Meta title="Bad Guy - Billie Eilish" />
      </Card>
      <Card
        hoverable
        className="card-item"
        cover={
          <img
            alt="Dior"
            src="https://www.ifairer.com/article_image/1582184232-ifairer.jpg"
          />
        }
      >
        <Meta title="Dior - Pop Smoke" />
      </Card>
      <Card
        hoverable
        className="card-item"
        cover={
          <img
            alt="MOO! - Doja Cat"
            src="https://i1.sndcdn.com/avatars-000719598739-brqlfl-t500x500.jpg"
          />
        }
      >
        <Meta title="Say So - Doja Cat" />
      </Card>
      <Card
        hoverable
        className="card-item"
        cover={
          <img
            alt="NBA Youngboy"
            src="https://e-cdns-images.dzcdn.net/images/artist/24733561de633f69b082c54539928315/500x500.jpg"
          />
        }
      >
        <Meta title="Lil Top - NBA Youngboy" />
      </Card>
      <LyricsModal />
    </div>
  );
}

// Function for Modal

function lyricModal() {
  return <div>Test</div>;
}

export default OurPicks;
