import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import UserShow from './components/UserShow';
import UserForm from './components/UserForm';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/users">Users</Link>&nbsp;&nbsp;
        <Link to="add-user">Add a user</Link>
      </div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/users" component={UserList} exact={true} />
        <Route path="/users/:id" component={UserShow} exact={true} />
        <Route path="/add-user" component={UserForm} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
