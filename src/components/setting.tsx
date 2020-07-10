import React from 'react';
import { Layout, Breadcrumb,Card, Col, Row,Input, Button } from 'antd';
import { Menu } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import './css/cours.css';
import '@ant-design/compatible/assets/index.css';
import {  SettingFilled,MenuOutlined, LogoutOutlined} from '@ant-design/icons'
import { Link, useParams, useHistory } from "react-router-dom";

import  not  from "./imgs/not.png";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Logo from './svgs/NGCLogo';
import Model from './svgs/Model';
import { useSelector } from 'react-redux';

const { Text } = Typography;


    const { Header, Content, Sider } = Layout;
   
    
function Setting() {

  const { courseId } = useParams()

  
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
    return (
    <div>
      <Layout>
        <Header className="nav">
        <Logo/>
        <Avatar size="large" icon={<UserOutlined />} className="avatar" />
        <Text className="username">{profile?.name}</Text>
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
          
          <Menu.Item key="1" icon={<Model />} ><Link to="/">My Courses</Link></Menu.Item>
            <Menu.Item key="3" icon={<SettingFilled style={{color:"rgba(206, 47, 142, 0.61)"}}/>} ><Link to="/Setting">settings</Link></Menu.Item>
           
        </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }} className="content">
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Setting</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='menu'>
            <div className="site-card-wrapper">
            <form className="form4">
              

                  <div className="profileForm4">
                      
                  <div className="Name4">
                        <div className="lab14"> 
                            <label className="label14" >Name</label>    
                        </div>  
                      <div>
                      <Input placeholder="Name" className="searchbar4" />
                      </div>

                    
                      </div>
                      <div className="Email4">
                        <div className="lab14"> 
                            <label className="label1" >Email</label>    
                        </div>  
                      <div>
                      <Input placeholder="exemple@ngc.com" 
                   
                      className="searchbar4" />
                      </div>

                    
                      </div>
                      <div className="Phone4">
                        <div className="lab14"> 
                            <label className="label14" >Phone</label>    
                        </div>  
                      <div>
                      <Input placeholder="+212 613457846" className="searchbar4" />
                      </div>
                      </div>
                  </div>
                
                      <div className="Password4">
                        <label className="label14">Password</label>

                        
                      <div>
                      <Input.Password type="password" 
                      
                      size="large" placeholder="***********" className="searchbar4" />
                      </div>
                      </div>
                      <div className="Password4">
                        <label className="label14">Confirm</label>   
                      <div>
                      <Input.Password type="password" 
                      
                      size="large" placeholder="***********" className="searchbar4" />
                      </div>
                      </div>

                      <div className="footer4">
                      <Button shape="round" className="btnt4" >Save</Button>
                      </div>
                      

                  </form>

             </div>
            
            </Content>
          </Layout>
        </Layout>
      </Layout>,
  
    </div>)
};

export default Setting