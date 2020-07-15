import React, { useState, useEffect } from "react";
import { Table,Dropdown, Menu ,Collapse, message, Form, Upload, Modal, Button, Input, Layout, Avatar, Typography} from 'antd';
import { SearchOutlined ,FilePdfOutlined,FileWordOutlined
  ,FileImageOutlined,FileExcelOutlined,FilePptOutlined,FileTextOutlined,InboxOutlined, UserOutlined, MenuOutlined, LogoutOutlined, SettingFilled } from '@ant-design/icons'
import '../components/css/file.css';
import '@ant-design/compatible/assets/index.css';
import { ColumnProps } from 'antd/es/table';
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
//import DropDownLink from "../components/DropdownLink";
//import DropDownFile from "../components/DropdownFile";
import {useDispatch, useSelector} from "react-redux"
import { fetchAll } from "../redux/actions/models";
import { RequestQueryBuilder, CondOperator } from "@nestjsx/crud-request";
import CourseBreadCrumb from '../components/CourseBreadCrumb';
import StudentSvg from "../components/svgs/StudentSvg";
import NGCLogo from "../components/svgs/NGCLogo";
import  not  from "../components/imgs/not.png";
import { fetchProfile } from '../redux/actions/profile';

import Model from "../components/svgs/Model";
const { Text } = Typography;

const { Header, Content, Sider } = Layout;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function FilesList() {
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
  const [visible, showCreateFileModal] = useState(false)
  const [visible2, showCreateLinkModal] = useState(false)
  const dispatch = useDispatch()
  const {courseId} = useParams()
const links :any = useSelector((state:any) => state.models["links"])
const documents :any = useSelector((state:any) => state.models["documents"])
console.log(documents)
useEffect(() => {
  const query = RequestQueryBuilder.create()
  query
  .setFilter({field:"cours.id",operator:CondOperator.EQUALS,value:courseId})

  dispatch(fetchAll("documents",query.query()))
  dispatch(fetchAll("links",query.query()))

}, [])
const [Collapsed,setCollapsed]=useState(false);
const location = useLocation()

const onCollapse=()=>{
  setCollapsed(!Collapsed)
}
var icone=<></>
const { Panel } = Collapse;
function callback(key:any) {
  console.log(key);
}

interface File {
  key: number,
  title:string,
  type: string,
  url:string,
  date:string,
  action:any;
}

    const columnsFile: ColumnProps<File>[] = [{
      
          title: 'title',
          dataIndex: 'title',
          key: 'title',
        },
      {
        title: 'type',
        dataIndex: 'type',
        key: 'type',
        render:(cell, row, index) => 
        { 
          switch (documents[index].type) {
            case "pdf": icone=<FilePdfOutlined />
            break;
            case "doc":icone=<FileWordOutlined />
            break;
            case "jpg":icone=<FileImageOutlined />
            break;
            case "xsl":icone=<FileExcelOutlined />
            break;
            case"ppt":icone=<FilePptOutlined />
              break;
          
            default:icone=<FileTextOutlined />
              break;
          }
         
         return (
           
           <div>
          {icone}
           </div>
         ) } 
      },
      {
        title: 'url',
        dataIndex: 'url',
        key: 'url',
      render:(cell, row, index) => (<a href={`http://localhost:3009/documents/files/${documents[index].url}`} target="_blank">{documents[index].url}</a>)
      },
     /* {
        title: 'date  ',
        dataIndex: 'date',
        key: 'date',
       
        
      },*/
      /*{
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render:(cell, row, index)=>(
          <DropDownFile file={documents[index]} ></DropDownFile>
        ),
      },*/
    ];

  
    interface lien {
      key: number,
      title:string,
      url:any,
      date:Date,
      action:any;
    }
      
     
    
      
    
        const columnsLink: ColumnProps<lien>[] = [{
          
              title: 'title',
              dataIndex: 'title',
              key: 'title',
              
        },
        
          {
            title: 'url',
            dataIndex: 'url',
            render:(cell, row, index) => (
            <a href={`${links[index].url}`} target="_blank">{links[index].url}</a>),
            key: 'url',
          
          },
          /*{
            title: 'date  ',
            dataIndex: 'createdAt',
            key: 'date',
           
            
          },*/
        /*  {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render:(cell, row, index)=>(
             <DropDownLink link={links[index]}/>
            ),
          },*/
        ];
  

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
        <Link to={"/module/"+courseId}>models</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<SettingFilled style={{color:"rgba(206, 47, 142, 0.61)"}}/>} ><Link to="/Setting">settings</Link></Menu.Item>

      
    </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
         <CourseBreadCrumb/>
        <Content className='menu'>
    <Collapse defaultActiveKey={['1']} onChange={callback} accordion>
    <Panel header="Files" key="1">
    <div style={{paddingBottom:"55px",position:"sticky"}}>
      <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
      </div>
      <Table<File> columns={columnsFile} dataSource={documents} /> 
    </Panel>
    <Panel header="Links" key="2">
    <div style={{paddingBottom:"55px",position:"sticky"}}>
      <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
      </div>
    <Table columns={columnsLink} dataSource={links || []} /> 
    </Panel>
  </Collapse>
  </Content>
          </Layout>
        </Layout>
      </Layout>)

}

export default FilesList;