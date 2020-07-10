import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import Module from './pages/module'
import CoursLayout from "./components/cours";
import Setting from "./components/setting";
import Tasks from "./components/Tasks";
import ShareScreen from "./pages/ScreenShare";
import StudentCourses from "./components/StudentCourses";
import { Provider } from "react-redux";
import store from "./redux"
import FilesList from "./pages/Files";
import TasksTest from "./pages/tasks";


function PrivateRoute({ children, ...rest }:any) {
  const token = localStorage.getItem("token")
  return (
    <Route
      {...rest}
      render={({ location }) =>
      token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const App = () => {
    return (
      <Provider store={store}>

      <Router>
        <Switch>
        <Route exact path="/login" ><LoginPage/></Route>
        <Route exact path="/register" ><SignUp/></Route>
        <PrivateRoute exact path="/" ><StudentCourses/></PrivateRoute>
        <PrivateRoute exact path="/module/:courseId" ><Module/></PrivateRoute>
        <PrivateRoute exact path="/cours" ><CoursLayout/></PrivateRoute>
        <PrivateRoute exact path="/Setting" ><Setting/></PrivateRoute>

        <PrivateRoute exact path="/LiveSession" ><ShareScreen/></PrivateRoute>
        <PrivateRoute exact path="/Tasks" ><Tasks/></PrivateRoute>
        <PrivateRoute path="/module/:courseId/screenShare">
              <ShareScreen/>
            </PrivateRoute>
            <PrivateRoute path="/module/:courseId/fileSharing">
              <FilesList/>
            </PrivateRoute>
            <PrivateRoute exact path="/module/:courseId/tasks">
              <TasksTest/>
            </PrivateRoute>
        </Switch>
      </Router>
      </Provider>
    );
  }
  export default App;
