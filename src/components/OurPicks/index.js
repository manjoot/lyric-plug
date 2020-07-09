import React from 'react';
import './index.css';
import LyricsModal from '../../containers/LyricsModal/index';
import axios from 'axios';
import { Card } from 'antd';

//Antd declaration to support more flexible content
const { Meta } = Card;

//Functon to Display Modal
const displayModal = () => {
  console.log('Card was clicked on!');
  return (
    <>
      <LyricsModal IsModalVisible={true} artist="dababy" song="bop" />;
    </>
  );
};

function OurPicks() {
  // Return Statement
  return (
    <div className="card-container">
      <Card
        hoverable
        className="card-item"
        onClick={displayModal}
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

export default OurPicks;
