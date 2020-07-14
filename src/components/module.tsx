import React from 'react';
import { Layout, Breadcrumb,Card, Col, Row,Input, Dropdown } from 'antd';
import { Menu } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import './css/cours.css';
import '@ant-design/compatible/assets/index.css';
import {  SettingFilled,MenuOutlined, LogoutOutlined} from '@ant-design/icons'
import { Link, useHistory, useParams } from "react-router-dom";
import tp from "./imgs/tp.png";
import cours from "./imgs/cours.png"
import screen from "./imgs/scren.png"
import exam from "./imgs/exam.png"
import  not  from "./imgs/not.png";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Logo from './svgs/NGCLogo';
import Model from './svgs/Model';
import { useSelector } from 'react-redux';
const { Text } = Typography;



    const { Header, Content, Sider } = Layout;

    
function ModelLayout() {
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
  const { courseId } = useParams()

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
          
            <Menu.Item key="1" icon={<Model />} ><Link to={"/module/"+courseId}>models</Link></Menu.Item>
            <Menu.Item key="3" icon={<SettingFilled style={{color:"rgba(206, 47, 142, 0.61)"}}/>} ><Link to="/Setting">settings</Link></Menu.Item>
          
        </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }} className="content">
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/">Courses</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Models</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='menu'>
            <div className="site-card-wrapper">
            <Row gutter={[48, 24]}>
           <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}            >
              <Card bordered={true}  hoverable onClick={() => history.replace(`/module/${courseId}/screenShare`)}>
                <img className="img" 
                    alt="example" 
                    src={screen} />


                <div className="moduleName">Live Session</div> 
                </Card>
                
              </Col> 
              <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}            >
              <Card bordered={true}  hoverable 
              onClick={() => history.replace(`/module/${courseId}/fileSharing`)}>
                 <img className="img" 
                    alt="example" 
                    src={cours} />


                <div className="moduleName">Course Material</div> 
                </Card>
                
              </Col> 
              
              <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}            >
              <Card bordered={true}  hoverable onClick={() => history.replace(`/module/${courseId}/tasks`)}>
               <img className="img" 
                    alt="example" 
                    src={exam} />


                <div className="moduleName">Tasks & Exams </div> 
                </Card>
                
              </Col> 
            </Row>


             </div>
            
            </Content>
          </Layout>
        </Layout>
      </Layout>,
  
    </div>)
};

export default ModelLayout