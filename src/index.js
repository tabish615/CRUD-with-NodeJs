import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';
import { Provider } from 'react-redux';
import store from './store/index';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/add-item' component={AddItem} />
        <Route path='/index' component={IndexItem} />
        <Route path='/edit/:id' component={EditItem} />
      </div>
  </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
