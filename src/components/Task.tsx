import React, { useState, useEffect } from "react";
import { Card, Collapse, Input, Button, Upload } from "antd";
import { Link, useParams } from "react-router-dom";
import exam from "./imgs/exam.png"


function Task({ task, ...rest }: any) {
  const { title, id, instructions } = task
  const{courseId} = useParams()

  return (

    <Card bordered={true} hoverable
      style={{ width: 200, height: 200,background: "#FFF9FE"
    }}
      cover={<Link to={`/module/${courseId}/tasks/${task.id}/StudentTask`} className="CardCouse">
        <img style={{ width: "100%", height: 140 }} alt="example" src={exam} /></Link>}
    >
      <div style={{ display: "inline-block", textAlign: "center", width:"100%" }}>
       {title}
      </div>
      <div style={{ display: "inline-block", float: "right" }}>
      </div>
    </Card>
  )
}

export default Task;
