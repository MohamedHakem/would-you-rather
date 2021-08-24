import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";
import Nav from "../Nav";
import Login from "../Login";
import Home from "../Home";
import NewQuestion from "../NewQuestion";
import Leaderboard from "../Leaderboard";
//import Question from "../QuestionPage/Question";
import NotFound from "../NotFound";
import QuestionPage from "../QuestionPage";
import LoadingBar from "react-redux-loading";
import ProtectedRoute from "../ProtectedRoute";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log("this.props from APP: ", this.props);

    return (
      <Router>
        <>
          <LoadingBar />
          <Nav authedUser={this.props.authedUser} users={this.props.users} />
          {this.props.authedUser === null || this.props.authedUser === "" ? (
            <Link to="/login" component={Login} />
          ) : null}
          {console.log(
            "this.props.authedUser from App Comp: ",
            this.props.authedUser
          )}
          {this.props.loading === false &&
          this.props.authedUser !== "" &&
          this.props.authedUser !== null ? (
            <div className="app">
              <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <ProtectedRoute
                  exact
                  path="/questions/:id"
                  component={QuestionPage}
                />
                <ProtectedRoute exact path="/add" component={NewQuestion} />
                <ProtectedRoute
                  exact
                  path="/leaderboard"
                  component={Leaderboard}
                />
                <ProtectedRoute exact path="/login" component={Login} />
                <ProtectedRoute path="*" component={() => "404 NOT FOUND"} />
              </Switch>
            </div>
          ) : null}
        </>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(App);
