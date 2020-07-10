import React, { useState, useEffect } from "react";
import { Card, Collapse, Input, Button, Upload } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FolderOpenOutlined,
  FileAddOutlined,
  MinusCircleOutlined
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOne, addOne, fetchAll } from "../redux/actions/models";
import { RequestQueryBuilder, CondOperator } from "@nestjsx/crud-request";
const { Panel } = Collapse;

function Task({ task, ...rest }: any) {
  const [visible, showModal] = useState(false);
  const dispatch = useDispatch();

  const{courseId} = useParams()
  const deleteTask = () => {
    dispatch(deleteOne("tasks", task.id));
    showModal(false);
  };
  const documents = useSelector((state:any) => state.models.documents)
  useEffect(() => {
    const query = RequestQueryBuilder.create()
    query.setFilter({ field: "task.id", operator: CondOperator.EQUALS, value: task.id })
    dispatch(fetchAll("documents",query.query()))
  
  }, [])
  const addFile=(file:File)=>{
    console.log(file)
    const fd = new FormData()
    fd.append("title",file.name)
    fd.append("task",task.id)
    fd.append("doc",file)
    dispatch(addOne("documents",fd))
    return false
  }
  return (
    <Panel {...rest} header={task.title} key={task.id}>
      <Card
        bordered={false}
        actions={[
          <DeleteOutlined key="delete" onClick={deleteTask} />,
          <EditOutlined key="edit" onClick={() => showModal(!visible)} />,
          <Link to={`/module/${courseId}/tasks/${task.id}/StudentTask`}>
            <FolderOpenOutlined key="open" />
          </Link>,
          <Upload 
          name="file"
          multiple={false}
          beforeUpload={addFile}
          showUploadList={false}
          >
            <FileAddOutlined />
          </Upload>,
        ]}
      >
        <strong>Instructions:</strong>
        <br />
        {task.instructions}
        <br />
        <br />
        <br />
        <br />
        <strong>fichiers:</strong>
        <br />
        {documents?.map((doc: any) => (
          <>
            {doc.title} <MinusCircleOutlined onClick={()=> dispatch(deleteOne("documents",doc.id))} /> <br />
          </>
        ))}
      </Card>
    </Panel>
  );
}

export default Task;
