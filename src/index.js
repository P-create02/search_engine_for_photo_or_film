import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Photos from './Photos'
import Films from './Films'
import Film from './Film'
import { AppProvider } from './context'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>

      <Router>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route path='/photos' exact>
            <Photos />
          </Route>
          <Route path='/films' exact>
            <Films />
          </Route>
          <Route path='/films/:id' children={<Film />} exact/>
        </Switch>
      </Router>

    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);