import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import PrivateRouter from './PrivateRouter';

export default function App() {
  return (
    <Router>
      <Fragment className='fragment'>
          <Routes>
            <Route path='/' element={<PrivateRouter/>} exact />
            <Route exact path='/login' element={<Login />}/>
          </Routes>
      </Fragment>
    </Router>
  );
}
