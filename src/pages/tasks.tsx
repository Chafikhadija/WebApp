import React, { useState, useEffect } from 'react'
import Layout from '../components/CourseLayout'
import { Button, Input, Collapse, Row, Col } from 'antd';
import '../components/css/tasks.css';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import Task from '../components/Task';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAll } from '../redux/actions/models';
import { RequestQueryBuilder, CondOperator } from '@nestjsx/crud-request';
import { useParams } from 'react-router-dom';

function TasksTest() {
    const [editModalVisible, showEditModal] = useState(false)
    const [createModalVisible, showCreateModal] = useState(false)
    const tasks = useSelector((state: any) => state.models["tasks"])
    const dispatch = useDispatch()
    const {courseId} = useParams()
    useEffect(() => {
        const query = RequestQueryBuilder.create()
        query.setFilter({ field: "cours.id", operator: CondOperator.EQUALS, value: courseId })
        dispatch(fetchAll("tasks",query.query()))
    }, [])
    return (
       <Layout>
           <div style={{padding:"20px"
    }}>
           <Row gutter={[48, 24]} >
                 {tasks?.map((task: any) =><Col className="gutter-row" sm={24} md={12} lg={6} >
                 <Task task={task} /></Col>)}
                 </Row>
           </div>
                
                 
        </Layout>
    )
}

export default TasksTest
