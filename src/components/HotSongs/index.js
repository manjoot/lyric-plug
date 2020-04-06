import React from 'react';
import './index.css';
import axios from 'axios';
import { Card } from 'antd';

//Antd declaration to support more flexible content
const { Meta } = Card;

function HotSongs() {

    return (
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    )
}

export default HotSongs;