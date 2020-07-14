import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import logo from "../imgs/logo.png";
import { Layout, message, Select } from "antd";
import { Card, Col, Row, Input } from "antd";
import { Button, Radio } from "antd";
import { Link, useHistory } from "react-router-dom";
import "../css/signUp.scss";
import api from "../api";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll } from "../redux/actions/models";
const { Header, Footer, Sider, Content } = Layout;

type Credentials = {
  username: String;
  password: String;
  password_confirmation: String;
};

function SignUp() {
  const history = useHistory();
  const filiers = useSelector((state: any) => state.models.filiers);
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
    password_confirmation: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll("filiers"));
  }, []);

  const register = () => {
    console.log(credentials);
    api
      .post("auth/register", credentials)
      .then((resp) => {
        history.replace("/login")
        message.success("account created with success");
      })
      .catch((err) => {
        console.log("logged in failed", err);
      });
  };
  console.log(filiers)
  return (
    <Layout>
      <Header className="nav4">
        <img src={logo} alt="" className="logoImg4" />
      </Header>

      <div className="Base4">
        <div className="background4"></div>
        <div className="LoginForm4">
          <form className="form4">
            <div className="profile4">
              <div className="text4">Profile</div>
            </div>

            <div className="profileForm4">
              <div className="Name4">
                <div className="lab14">
                  <label className="label14">Name</label>
                </div>
                <div>
                  <Input placeholder="Name"     onChange={(e) => {
                      e.persist();
                      setCredentials((c) => ({
                        ...c,
                        name: e.target.value,
                      }));
                    }} className="searchbar4" />
                </div>
              </div>
              <div className="Email4">
                <div className="lab14">
                  <label className="label1">Username</label>
                </div>
                <div>
                  <Input
                    placeholder="username"
                    onChange={(e) => {
                      e.persist();
                      setCredentials((c) => ({
                        ...c,
                        username: e.target.value,
                      }));
                    }}
                    className="searchbar4"
                  />
                </div>
              </div>
              <div className="Phone4">
                <div className="lab14">
                  <label className="label14">Option : </label>
                </div>
                <div className="searchbar4">
                  <Select  style={{ width: 120 }} onSelect={(v)=>  setCredentials((c) => ({
                        ...c,
                        filiere: v,
                      }))}  className="searchbar4"                   
                      >
                    {filiers?.map((fil:any)=><Select.Option value={fil.id}>{fil.title}</Select.Option>)}
                  </Select>
                </div>
              </div>
            </div>
            <div className="profile4">
              <div className="text4">Password</div>
            </div>
            <div className="Password4">
              <label className="label14">Password</label>

              <div>
                <Input.Password
                  type="password"
                  onChange={(e) => {
                    e.persist();
                    setCredentials((c) => ({ ...c, password: e.target.value }));
                  }}
                  size="large"
                  placeholder="***********"
                  className="searchbar4"
                />
              </div>
            </div>
            <div className="Password4">
              <label className="label14">Confirm</label>
              <div>
                <Input.Password
                  type="password"
                  onChange={(e) => {
                    e.persist();
                    setCredentials((c) => ({
                      ...c,
                      password_confirmation: e.target.value,
                    }));
                  }}
                  size="large"
                  placeholder="***********"
                  className="searchbar4"
                />
              </div>
            </div>

            <div className="footer4">
              <Button
                shape="round"
                className="btnt4"
                onClick={() => register()}
              >
                Create Account
              </Button>
            </div>
            <div className="text1">
              allready have an account ? <Link to="/">Login.</Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
export default SignUp;
