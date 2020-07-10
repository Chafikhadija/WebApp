import React, { useState, useEffect } from 'react'
import Layout from '../components/CourseLayout'
import { Button, Input, Collapse } from 'antd';
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
            <div>
                <div style={{ paddingBottom: "20px", position: "sticky", float: "right" }}>
                    <Button className="mybtn" icon={<PlusOutlined />} onClick={() => showCreateModal(!createModalVisible)} >devoir</Button>
                </div>
                <div style={{ paddingBottom: "20px", position: "sticky", float: "right" }}>
                    <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />} />
                </div>
            </div>
            <Collapse accordion defaultActiveKey={["1"]}>
                {tasks?.map((task: any) => <Task task={task} />)}
            </Collapse>
        </Layout>
    )
}

export default TasksTest
