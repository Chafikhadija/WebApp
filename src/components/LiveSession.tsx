import React from 'react';
import { Layout, Breadcrumb,Card, Col, Row,Input } from 'antd';
import { Menu } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import './css/cours.css';
import '@ant-design/compatible/assets/index.css';
import {  SettingFilled,MenuOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";

import  not  from "./imgs/not.png";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Logo from './svgs/NGCLogo';
import Model from './svgs/Model';
const { Text } = Typography;


    const { Header, Content, Sider } = Layout;
   
    
function LiveSession() {



  
 
    return (
    <div>
      <Layout>
        <Header className="nav">
        <Logo/>
        <Avatar size="large" icon={<UserOutlined />} className="avatar" />
        <Text className="username">khadija chafi</Text>
        <img src={not} alt=" " className="notif"/>
        <MenuOutlined className="setting" />

        </Header>
        <Layout>
          <Sider width="20%"  className='Sider'>
          <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          
            <Menu.Item key="1" icon={<Model />} ><Link to="/module">modules</Link></Menu.Item>
            <Menu.Item key="3" icon={<SettingFilled style={{color:"rgba(206, 47, 142, 0.61)"}}/>} ><Link to="/module/Setting">settings</Link></Menu.Item>
          
        </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }} className="content">
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/Module">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/Module">Module</Link></Breadcrumb.Item>
              <Breadcrumb.Item>LiveSession</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='menu'>
            <div className="site-card-wrapper">


             </div>
            
            </Content>
          </Layout>
        </Layout>
      </Layout>,
  
    </div>)
};

export default LiveSession