import React, { useState, useEffect } from "react";
import Layout from "../components/CourseLayout";
import {
  Button,
  Input,
  Collapse,
  Row,
  Col,
  Table,
  Upload,
  message,
} from "antd";
import "../components/css/tasks.css";
import {
  PlusOutlined,
  SearchOutlined,
  MinusCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Task from "../components/Task";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll, addOne } from "../redux/actions/models";
import { RequestQueryBuilder, CondOperator } from "@nestjsx/crud-request";
import { useParams } from "react-router-dom";
import api from "../api";
import { fetchProfile } from "../redux/actions/profile";

function StudentTask() {
  const [visible, showModal] = useState(false);
  const dispatch = useDispatch();
  const [document, setDocument] = useState<any>();
  const { taskId } = useParams();

  const documents = useSelector((state: any) => state.models.documents);
  const solutions = useSelector((state: any) => state.models.solutions);
  const profile = useSelector((state: any) => state.profile);

  
  useEffect(() => {
    const query = RequestQueryBuilder.create();
    query.setFilter({
      field: "task.id",
      operator: CondOperator.EQUALS,
      value: taskId,
    });
    dispatch(fetchAll("documents", query.query()));
    dispatch(fetchProfile());
  }, []);
  const tasks = useSelector((state: any) => state.models["tasks"]);
  useEffect(() => {
    /*const query = RequestQueryBuilder.create();
    query.setFilter({
      field: "task.id",
      operator: CondOperator.EQUALS,
      value: taskId,
    });
    dispatch(fetchAll("tasks", query.query()));*/

    const query2 = RequestQueryBuilder.create();
    query2
      .setFilter({
        field: "task.id",
        operator: CondOperator.EQUALS,
        value: taskId,
      })
      .setFilter({
        field: "user.id",
        operator: CondOperator.EQUALS,
        value: profile.id,
      });
    dispatch(fetchAll("solutions", query2.query()));
  }, [profile]);

  const addSolution = async () => {
    const solution = new FormData();
    solution.append("doc", document);
    solution.append("task", taskId || "0");
    solution.append("user", profile.id);
    console.log(solution);

    const doc = new FormData();
    doc.append("doc", document);
    doc.append("title", "solution");

    const resp = await api.post("documents", doc);
    dispatch(
      addOne("solutions", {
        task: taskId,
        user: profile.id,
        document: resp.data.id,
      })
    );
  };

  const statut = {
    name: "doc",
    multiple: false,
    beforeUpload: (doc: any) => {
      setDocument(doc);
      return false;
    },
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <table>
          <tr>
            <td>
              {tasks?.filter((task:any) => task.id == taskId)?.map((task: any) => (
                <div className="task">
                  <div className="Instruction">Instructions :</div>
                  <div className="InstructionTask">
                    {task.instructions}
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <div className="Instruction">Files :</div>
                  <div className="files">
                    <br />
                    {documents?.map((doc: any) => (
                      <a href={`http://localhost:3009/documents/files/${doc.url}`} target="_blank">{doc.title}</a>
                    ))}
                  </div>
                </div>
              ))}
            </td>
            <td>
              <div className="submition">
                <div className="submitButton1">
                  <Button shape="round" className="btnt4" onClick={addSolution}>
                    Submit Files
                  </Button>
                </div>

                <div className="submitButton"></div>
                <div className="submitButton">
                  <Upload {...statut} className="upload">
                    <Button className="btnt4">
                      <UploadOutlined /> Click to Upload
                    </Button>
                  </Upload>
                </div>
             
              </div>
              <br />
             {solutions?.length>0 && <div className="submitButton"><h3 className="Instruction">My Solution :</h3>
                <a href={`http://localhost:3009/documents/files/${solutions[0].document.url}`} target="_blank" >
                {solutions[0].document.title}</a>
                </div>}
                <br />

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </td>
          </tr>
        </table>
      </div>
    </Layout>
  );
}

export default StudentTask;
