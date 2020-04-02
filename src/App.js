import React from 'react';
import logo from './logo.svg';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      {/* Layout Declaration */}
      <Layout className="layout">

        {/* Header and Navigation Menu */}
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
          </Menu>
        </Header>

        {/* Content Section */}
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <br />
            <p>Whatever I want goes in here</p>
          </div>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: 'center' }}>Manjoot Narwal ©2020</Footer>
      </Layout>
    </div>
  );
}

export default App;
