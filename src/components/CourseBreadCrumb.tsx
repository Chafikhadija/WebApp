import React from 'react'
import { Breadcrumb } from 'antd'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useSelector} from "react-redux"
function CourseBreadCrumb() {
    const location = useLocation()
    console.log(location.pathname.split("/"))
    const {courseId,taskId} = useParams()
    console.log("courseid "+ courseId)

    const pathSplit = location.pathname.split("/")
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/">Courses</Link></Breadcrumb.Item>
          <Breadcrumb.Item>{courseId}</Breadcrumb.Item>
          {pathSplit.includes("module") && <Breadcrumb.Item><Link to={"/module/"+courseId}>Modules</Link></Breadcrumb.Item>}
          {pathSplit.includes("students") && <Breadcrumb.Item><Link to={"/students/"+courseId}>Etudiants</Link></Breadcrumb.Item>}
          {pathSplit.includes("screenShare") && <Breadcrumb.Item>Partage d'ecran</Breadcrumb.Item>}
          {pathSplit.includes("fileSharing") && <Breadcrumb.Item>Fichiers & liens</Breadcrumb.Item>}
          {pathSplit.includes("tasks") && <Breadcrumb.Item> <Link to={`/module/${courseId}/tasks`}>Devoirs</Link></Breadcrumb.Item>}
          <Breadcrumb.Item>{taskId}</Breadcrumb.Item>
          {pathSplit.includes("StudentTask") && <Breadcrumb.Item>Solutions</Breadcrumb.Item>}
        </Breadcrumb>
    )
}

export default CourseBreadCrumb
