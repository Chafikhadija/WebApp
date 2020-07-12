import React, { useState, useEffect } from 'react'
import Layout from '../components/CourseLayout'
import { Button, Input, Collapse, Row, Col, Table } from 'antd';
import '../components/css/tasks.css';
import { PlusOutlined, SearchOutlined, MinusCircleOutlined, UploadOutlined } from '@ant-design/icons'
import Task from '../components/Task';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAll } from '../redux/actions/models';
import { RequestQueryBuilder, CondOperator } from '@nestjsx/crud-request';
import { useParams } from 'react-router-dom';

function StudentTask() {

    const [visible, showModal] = useState(false);
    const dispatch = useDispatch();
  
    const{taskId} = useParams()
   
    const documents = useSelector((state:any) => state.models.documents)
    useEffect(() => {
      const query = RequestQueryBuilder.create()
      query.setFilter({ field: "task.id", operator: CondOperator.EQUALS, value: taskId})
      dispatch(fetchAll("documents",query.query()))
    
    }, [])
    const tasks = useSelector((state: any) => state.models["tasks"])
    useEffect(() => {
        const query = RequestQueryBuilder.create()
        query.setFilter({ field: "task.id", operator: CondOperator.EQUALS, value: taskId })
        dispatch(fetchAll("tasks",query.query()))
    }, [])
   
    return (
       <Layout>
           <div style={{padding:"20px"}}>
               <table>
                   <tr>
                       <td>
{tasks?.map((task: any)=>
    <div className="task">
        <div className="Instruction">
            Instructions : 
        </div>
        <div className="InstructionTask">
        {task.instructions}
         <br />
         <br />
         <br />
         <br />
        </div>
        <div className="Instruction">
            Files : 
        </div>
        <div>
        <br />
         {documents?.map((doc: any) => (
         <>
         {doc.title} 
         </>
         ))}
        </div>
      


    </div>
    
    
    )}
                       </td>
                       <td>
                       <div className="submition">
                   
                   <div className="submitButton">
                   <Button shape="round" className="btnt4"  >Submit Files</Button>
                   </div>
                   
                   <div className="submitButton"></div>
                   <div className="submitButton">

                   <Button className="btnt4">
      <UploadOutlined /> Click to Upload
    </Button>
    </div>

                       

                   </div>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                       </td>
                   </tr>
               </table>

              
               
           </div>
                
                 
        </Layout>
    )
}

export default StudentTask
