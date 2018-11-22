import React, { Component } from 'react';
import { Router, Link, route } from 'react-stax'
import './App.css';
import styled from 'styled-components';
import HomePage from './views/HomePage';
import AdminPage from "./views/AdminPage"
import LoginPage from './views/LoginPage'
import userStore from './stores/userStore'

const TopDevNav = styled.div`
  background-color: #1e272e;
  display: flex;
  justify-content: space-evenly;
  a{
    transition: .2s all ease;
    padding: 1vh 4vh;
    color: white;
    text-decoration: none;
    &:hover{
      background-color: #2f3542;
    }
  }
`;




class App extends Component {
  
  render() {
    return (
      <div className="App">
        <React.Fragment>
        <TopDevNav>
          <Link to="/admin">Admin</Link>
          <Link to="home">Home</Link>
        </TopDevNav>
        <Router defaultPage='home' >
              <HomePage page='home' />
              <LoginPage page='login' />
              <AdminPage page='admin' onRoute={route({to: 'login'})}  />
        </Router>

        </React.Fragment>
        

      </div>
    );
  }
}

export default App;
