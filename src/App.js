import React from 'react';
import logo from './assets/images/Lyric Plug-logo-black.png'
import whitelogo from './assets/images/Lyric Plug-logo-white.png'
import Search from './components/Search/index'
import HotSongs from './components/HotSongs/index'
import OurPicks from './components/OurPicks/index'
import { Layout, Menu, Row, Col, Divider } from 'antd';
import './App.css';


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      
      {/* Layout Declaration */}
      <Layout className="layout">
      <img class="center" src={logo} alt='logo'/>

      {/* Content Section */}
        <Content style={{ padding: '0 50px' }}>
          <Row justify="space-between">
            {/* Search Lyrics */}
            <Col span={11}>
              <div className="site-layout-content">
                <h1 style={{textAlign: "center"}}>Welcome! Type in your artist and song below!</h1>
                <br />
                <Search />
              </div>
              
            </Col>

            {/*  Our Picks */}
            <Col span={11}>
              <div className="site-layout-content">
                <h1>Our Picks</h1>
                <Divider />
                <OurPicks />
              </div>
            </Col>
          </Row>

        </Content>
        
        {/* Footer */}
        <Footer style={{ textAlign: 'center' }}>Manjoot Narwal ©2020</Footer>
        
      </Layout>
    </div>
  );
}

export default App;
