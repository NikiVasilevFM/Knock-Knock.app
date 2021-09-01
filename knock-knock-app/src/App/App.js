import React, { useEffect, } from 'react';
import { Provider } from 'react-redux';
import MainPage from '../MainPage/MainPage';
import RegestrationPage from '../RegestrationPage/RegestrationPage';
import LoginPage from '../LoginPage/LoginPage';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import store from '../redux/store';
import { connect } from '../websocketClient'


function App() {

  useEffect(() => {
    connect();
  }, [])

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <NavLink to = {"/"} exact>Start</NavLink>
          <NavLink to = {"/regestration"}>Regestration</NavLink>
          <NavLink to = {"/login"}>Login</NavLink>
          <NavLink to = {"/start"}>Chat</NavLink>
        </div>
        {/* поставить Header */}
        <Switch>
          <Route component={StartPage} path = {"/"} exact />
          <Route component={RegestrationPage} path = {"/regestration"} />
          <Route component={LoginPage} path = {"/login"} />
          <Route component = {MainPage} path = {"/start"}></Route>
        </Switch>  
      </Provider>
    </BrowserRouter>
  )
};

export default App;