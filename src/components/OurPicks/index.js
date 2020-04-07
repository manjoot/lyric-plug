import React from 'react';
import './index.css';
import axios from 'axios';
import { Card, Row, Col } from 'antd';

//Antd declaration to support more flexible content
const { Meta } = Card;

function OurPicks() {

    return (
      <div className="cardcontainer">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="DaBaby" src="https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_600/Dababy_BabyOnBaby.jpg" />}
            >
            <Meta title="HOT - DaBaby" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Billie Eilish" src="https://images.squarespace-cdn.com/content/v1/593070a42994cad2710a6439/1549097156800-NS0LICAP3V3IYW276GDX/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/j.png" />}
            >
            <Meta title="ocean eyes - Billie Eilish" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Dior" src="https://www.ifairer.com/article_image/1582184232-ifairer.jpg" />}
            >
            <Meta title="Dior - Pop Smoke" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="MOO! - Doja Cat" src="https://i1.sndcdn.com/avatars-000719598739-brqlfl-t500x500.jpg" />}
            >
            <Meta title="MOOO! - Doja Cat" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="NBA Youngboy"
              src="https://e-cdns-images.dzcdn.net/images/artist/24733561de633f69b082c54539928315/500x500.jpg" />}
            >
            <Meta title="Lil Top - NBA Youngboy" />
            </Card>
      </div>
    )
}

export default OurPicks;