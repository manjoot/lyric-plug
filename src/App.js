import React from 'react';
import wave from './wave.svg';
import logo from './Lyric Plug-logo-black.png'
import whitelogo from './Lyric Plug-logo-white.png'
import Search from './components/Search/index'
import { Layout, Menu, Row, Col } from 'antd';
import './App.css';


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      
      {/* Layout Declaration */}
      <Layout className="layout">
      <img class="center" src={logo} alt='logo'/>
      <Row>
        <Col span={6}>
          
        </Col>
        <Col span={18}>
          {/* Header and Navigation Menu */}

          {/* <Header>

            <div className="logo" />
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Home</Menu.Item>
            </Menu> */}
          {/* </Header> */}

        </Col>
      </Row>
      {/* Content Section */}
      <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <br />
            <h1 style={{textAlign: "center"}}>Welcome! Type in your artist and song below!</h1>
            <br />
            <Search />
          </div>
          </Content>
          {/* Footer */}
          <Footer style={{ textAlign: 'center' }}>Manjoot Narwal ©2020</Footer>
        
      </Layout>
    </div>
  );
}

export default App;
