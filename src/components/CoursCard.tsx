import React, { useState } from 'react'
import { Form, Modal, Layout, Menu, Breadcrumb, Card, Col, Row, Input, Button } from 'antd';
import { Link } from "react-router-dom";
import courses from "../components/imgs/courses.png"
function CoursCard(cours: any) {
  const { title, id, anneScolaire } = cours

  return (

    <Card bordered={true} hoverable
      style={{ width: 200, height: 200,background: "#FFF9FE"
    }}
      cover={<Link to={"/module/" + id} className="CardCouse">
        <img style={{ width: "100%", height: 140 }} alt="example" src={courses} /></Link>}
    >
      <div style={{ display: "inline-block", textAlign: "center", width:"100%" }}>
       {title}
      </div>
      <div style={{ display: "inline-block", float: "right" }}>
      </div>
    </Card>
  )
}

export default CoursCard
