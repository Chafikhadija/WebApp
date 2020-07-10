import React, { useState } from 'react'
import { Form,Modal,Layout, Menu, Breadcrumb,Card, Col, Row,Input,Button, Avatar, Typography, Dropdown } from 'antd';
import NGCLogo from "./svgs/NGCLogo"
import ModelSvg from "./svgs/Model"
import StudentSvg from "./svgs/StudentSvg"
import {  SettingFilled, UserOutlined, LogoutOutlined, MenuOutlined} from '@ant-design/icons'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CourseBreadCrumb from './CourseBreadCrumb';
import Model from './svgs/Model';
import  not  from "./imgs/not.png";

const { Text } = Typography;


const { Header, Content, Sider } = Layout;

function MyLayout({children}:any) {
  const history = useHistory()
  const profile :any = useSelector((state:any) => state.profile)

  const menu = (
    <Menu >
      <Menu.Item>
        
        <UserOutlined /> profile
       
      </Menu.Item>
      <Menu.Item onClick={()=>logout()}>
        
        <LogoutOutlined  /> logout
      </Menu.Item>

      
    </Menu>
  );
  const logout = () =>{
    localStorage.clear();
    history.replace("/");
    
  
  
  }
  const [Collapsed,setCollapsed]=useState(false);
const location = useLocation()

const onCollapse=()=>{
  setCollapsed(!Collapsed)
}
const {courseId} = useParams()

    return (
      <Layout>
      <Header className="nav">
      <NGCLogo/>
          <Avatar size="large" icon={<UserOutlined />} className="avatar" />
          <Text className="username">{profile?.name}</Text>
          <img src={not} alt=" " className="notif"/>
          <Dropdown overlay={menu} className="menu_setting">
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <MenuOutlined className="setting" />
      </a>
    </Dropdown>,
          
      </Header>
      <Layout>
        <Sider  width={200} style={{ background: '#fff' }} collapsedWidth="0" className='Sider' collapsible collapsed={Collapsed} onCollapse={onCollapse} >
        <Menu
        mode="inline"
        selectedKeys={location.pathname.split("/")}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        
      >
        
        <Menu.Item key="module" icon={<Model />}style={{color:'rgba(0, 0, 0, 0.65)'}} >
          <Link to={"/module/"+courseId}>modules</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingFilled style={{color:"rgba(206, 47, 142, 0.61)"}}/>} ><Link to="/Setting">settings</Link></Menu.Item>
  
        
      </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
           <CourseBreadCrumb/>
          <Content className='menu'>
            {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default MyLayout
