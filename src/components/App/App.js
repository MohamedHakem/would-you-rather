import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";
import Nav from "../Nav";
import Login from "../Login";
import Home from "../Home";
import NewQuestion from "../NewQuestion";
import Leaderboard from "../Leaderboard";
import NotFound from "../NotFound";
import QuestionPage from "../QuestionPage";
import LoadingBar from "react-redux-loading";
import ProtectedRoute from "../ProtectedRoute";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          <Nav authedUser={this.props.authedUser} users={this.props.users} />
          {this.props.authedUser === null || this.props.authedUser === "" ? (
            <Link to="/would-you-rather/login" component={Login} />
          ) : null}

          {this.props.loading === false &&
          this.props.authedUser !== "" &&
          this.props.authedUser !== null ? (
            <div className="app">
              <Switch>
                <ProtectedRoute
                  exact
                  path="/would-you-rather/"
                  component={Home}
                />
                <ProtectedRoute
                  exact
                  path="/would-you-rather/questions/:id"
                  component={QuestionPage}
                />
                <ProtectedRoute
                  exact
                  path="/would-you-rather/add"
                  component={NewQuestion}
                />
                <ProtectedRoute
                  exact
                  path="/would-you-rather/leaderboard"
                  component={Leaderboard}
                />
                <ProtectedRoute
                  exact
                  path="/would-you-rather/login"
                  component={Login}
                />
                <ProtectedRoute
                  path="/would-you-rather/*"
                  component={NotFound}
                />
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

export default connect(mapStateToProps, { handleInitialData })(App);
