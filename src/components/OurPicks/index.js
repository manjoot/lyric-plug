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

{/* 
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Kyoto - Yung Lean" src="data:image/jpeg;base64,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" />}
            >
            <Meta title="Kyoto - Yung Lean" />
            </Card> */}





        

      </div>
    )
}

export default OurPicks;