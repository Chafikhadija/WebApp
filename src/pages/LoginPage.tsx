import React from 'react'
import 'antd/dist/antd.css';
import logo from "../imgs/logo.png"  
import { Layout} from 'antd';
import { Card, Col, Row,Input, message } from 'antd';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Form, Checkbox } from 'antd';
import { Link, useHistory } from "react-router-dom";
import api from "../api";
import {useState} from 'react';

import '../css/login.scss'


const { Header, Footer, Sider, Content } = Layout;


type Credentials = {
  username : String
  password : String
}



function LoginPage(){
  const history = useHistory()
  const [credentials,setCredentials] = useState<Credentials>({username:"",password:""})
  const login = () => {
    console.log(credentials)
    api.post("auth/login", credentials)
    .then(resp=>{
      localStorage.setItem("token",resp.data.access_token)
      console.log("logged in succes", resp.data)
      history.replace("/")
      window.location.reload();

    })
    .catch(err=>{
      message.error("wrong Email or password")
      console.log("logged in failed",err)
    })
  }
  return (
   <Layout>
    
      
     <div className="body5">
     <Header className='nav5'>
     <img src={logo} alt="" className="logoImg5" />
   </Header>
          <div className="Base5">
              <div className="background5"></div>
          </div>
          <div className="LoginForm5">
              <form className="form5">
          <div>
          <img src={logo} alt="" className="logoImg15" />
            </div>    

                      <div className="Email5">
                        <div className="lab15"> 

                            <label className="label15" >Username</label>    
                        </div>  
                      <div>
                      <Input placeholder="username" 
                      onChange={(e)=>{
                        e.persist()
                        setCredentials(c=>({...c,username: e.target.value }))}} className="searchbar5" />
                      </div>
                      </div>
                      <div className="Password5">
                        <label className="label15">Password</label>                        
                      <div>
                      <Input.Password type="password" 
                      onChange={(e)=>{
                        e.persist()
                        setCredentials(c=>({...c,password: e.target.value }))}}
                      size="large" placeholder="***********" className="searchbar5" />
                      </div>
                      </div>
                      <div className="footer5">
                      <Button shape="round"  onClick={()=>login()}className="btnt5" >Login</Button>
                      </div>
                      <div className="text">
                      New student? <Link to="/register">Create an account.</Link>
                      </div>
                  </form>


              </div>
          </div> 
          </Layout>
   
  );
};
export default LoginPage