import React,{useState} from 'react';
import { Form,Modal,Layout, Breadcrumb,Card, Col, Row,Input,Button,Divider  } from 'antd';
import { Menu } from 'antd';
import { Typography, Space } from 'antd';
import 'antd/dist/antd.css';
import './css/cours.css';
import '@ant-design/compatible/assets/index.css';
import {  SettingFilled,MenuOutlined ,EyeOutlined,DownloadOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";

import  not from "./imgs/not.png";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Table, Tag } from 'antd';
import Model from './svgs/Model';
import Logo from './svgs/NGCLogo';
const { Column, ColumnGroup } = Table;
const { Text } = Typography;
const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
function CoursLayout() {
    const data = [
        {
          key: '1',
          firstName: 'Spring MVC',
          age: "10/04/2020",
          address: 'bla bla bla bla',
         
        },
        {
          key: '2',
          firstName: 'Spring Security',
          age: "10/03/2020",
          address: 'bla bla bla bla',
          
        },
        {
          key: '3',
          firstName: 'Projet JEE',
          lastName: 'Black',
          age: "10/05/2020",
          address: 'ba9i masiftoch lih hhhhhh',
          
        },   
      ];



  
        
         
     

  
 
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
              <Breadcrumb.Item><Link to="/Module">Modules</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Courses</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='menu'>
            <div className="site-card-wrapper">

            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
      Spring Security
    </Divider>
            <Table dataSource={data}>
                
                        <Column title="Title" dataIndex="firstName" key="firstName" />
                
                    <Column title="Description" dataIndex="address" key="address" />

                    <Column title="created at" dataIndex="age" key="age" />
                    <Column title="Last Update" dataIndex="age" key="age" />


                    <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                      <Space size="middle">

                      <a><EyeOutlined /></a>
                      <a> <DownloadOutlined /></a>
                                      </Space>
                    )}
                    />
            </Table>
             </div>
            </Content>
            </Layout>
            </Layout>
      </Layout>,
  
    </div>)
};

export default CoursLayout