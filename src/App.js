import React from 'react';
import wave from '../public/wave.svg';
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
            <h1>Welcome! Type in your artist and song below!</h1>
            <p> Lorem ipsum dolor sit amet, mutat bonorum eruditi te vix, quo ea erant platonem posidonium. In has habeo ocurreret. Has exerci eligendi placerat in, omnis habeo apeirian an duo. 
              Ut admodum volutpat est, inani facilis lobortis sit an. 
              Tollit persecuti nam ex, eum te diam illud insolens. 
              Intellegat adolescens instructior his cu, pri justo labore eruditi cu. Qui eu stet etiam legendos, vel eu unum vidisse tacimates. 
              Eu congue consul omittam his, ea postulant ocurreret his, cum ea malis inermis. 
              Te causae eleifend sadipscing pro. Mel adhuc comprehensam ei. Audiam recteque no pri pericula dissentias. Vel ne viris posidonium, at sed lorem mucius copiosae. 
              Velit delectus no sed, no quaestio dissentiet deterruisset cum. Usu id iudicabit rationibus. Usu dico efficiendi cu, cu duo novum prompta vulputate.
              Qui ei alia tantas. Viris moderatius ei usu, mel ad homero inimicus. Sit nullam corrumpit scripserit at, cum iuvaret tibique id. 
              Eum natum regione accumsan ne, no vim primis reprimique. 
              Sea accumsan lucilius ut. Platonem patrioque vituperatoribus et qui. Vis eu debet legimus efficiendi, mel dolore labore scripserit ad. 
              Ne sea wisi commodo imperdiet, an eos quodsi mentitum delicatissimi, ei inciderint ullamcorper mea. Doctus phaedrum est ne, in vix probo pertinacia. 
              Nisl menandri eu pro, mea in nulla quidam, per esse animal definiebas no. Usu deserunt forensibus ei, stet graeco referrentur at per, primis detracto ex nec.</p>
          </div>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: 'center' }}>Manjoot Narwal ©2020</Footer>
      </Layout>
    </div>
  );
}

export default App;
