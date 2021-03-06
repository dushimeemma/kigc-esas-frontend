import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import HomePage from '../components/HomePage';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Navs from '../components/Header';
import Footer from '../components/Footer';
import Role from '../components/Role';
import RoleSingle from '../components/RoleSingle';
import Student from '../components/Student';
import StudentSingle from '../components/StudentSingle';
import Attendance from '../components/Attendance';
import Finance from '../components/Finance';
import Course from '../components/Course';
import CourseRecord from '../components/CourseRecord';
import Room from '../components/Room';
import SeatRecord from '../components/SeatRecord';
import DefaultDashboard from '../components/DefaultLayoutDashboard';
import SingleRoom from '../components/SingleRoom';

const Routes = () => {
  return (
    <Router>
      <Navs />
      <Container fluid>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/register' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/default-dashboard' component={DefaultDashboard} />
          <Route exact path='/roles' component={Role} />
          <Route exact path='/role/:slug' component={RoleSingle} />
          <Route exact path='/students' component={Student} />
          <Route exact path='/student/:slug' component={StudentSingle} />
          <Route exact path='/attendance' component={Attendance} />
          <Route exact path='/finance' component={Finance} />
          <Route exact path='/course' component={Course} />
          <Route exact path='/course/record/:slug' component={CourseRecord} />
          <Route exact path='/room' component={Room} />
          <Route exact path='/seat/record/:slug' component={SeatRecord} />
          <Route exact path='/room/:slug' component={SingleRoom} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};

export default Routes;
