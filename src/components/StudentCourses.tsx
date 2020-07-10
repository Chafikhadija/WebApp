import React, { useEffect } from 'react';
import { Layout, Breadcrumb,Card, Col, Row,Input, Dropdown } from 'antd';
import { Menu } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import './css/cours.css';
import '@ant-design/compatible/assets/index.css';
import {  SettingFilled,MenuOutlined, LogoutOutlined} from '@ant-design/icons'
import { Link, useHistory } from "react-router-dom";
import  not  from "./imgs/not.png";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Logo from './svgs/NGCLogo';
import Model from './svgs/Model';
import CoursCard from './CoursCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/actions/models';
import { fetchProfile } from '../redux/actions/profile';
import { RequestQueryBuilder, CondOperator } from "@nestjsx/crud-request";


const { Text } = Typography;



    const { Header, Content, Sider } = Layout;

    
function StudentCourses() {

  const history = useHistory()
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
    
  const dispatch = useDispatch()
  const cours :any = useSelector((state:any) => state.models["cours"])
  const profile :any = useSelector((state:any) => state.profile)
 useEffect(() => {
   dispatch(fetchProfile())
 }, [])
 useEffect(()=>{
  if(profile  ){
    const query = RequestQueryBuilder.create()
    query
    .setFilter({field:"cours.filiers.id",operator:CondOperator.IN,value:profile?.filiere?.id})
  
     dispatch(fetchAll("cours",query.query()))
  }
 },[profile])
 
    return (
    <div>
      <Layout>
        <Header className="nav">
        <Logo/>
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
            <Breadcrumb.Item><Link to="/">My Courses</Link></Breadcrumb.Item>
            </Breadcrumb>
            <Content className='menu'>
            <div className="site-card-wrapper">
                <Row gutter={[48, 24]} >
             
                    {cours && cours.map((cours:any) => (
                         <Col key={cours.id} className="gutter-row" sm={24} md={12} lg={6} >
                         <CoursCard {...cours}/>
                       </Col> 
                  ))}          
                </Row>
              </div>
              
            
            </Content>
          </Layout>
        </Layout>
      </Layout>,
  
    </div>)
};

export default StudentCourses