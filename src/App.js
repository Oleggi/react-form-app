import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import UsersContainer from './components/Users/UsersContainer';
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
        <Route
              exact
              path="/"
              render={() => {
                return <Redirect to={"/login"} />;
              }}
            />
          <Route exact path="/users/:page?" render={() => <UsersContainer />}></Route>
          <Route path="/login" render={() => <LoginForm />}></Route>
        </Switch>
    </div>
  );
}

export default App;
