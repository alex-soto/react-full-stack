import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history';
import Routes from './routes'

const browserHistory = createBrowserHistory();
ReactDOM.render(
  <Router history={browserHistory} >
    {Routes}
  </Router>,
  document.getElementById('root')
)
