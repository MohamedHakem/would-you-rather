import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setAuthedUser } from "../../actions/authedUser";
//import questions from "../../reducers/questions";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      selsectedUser: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  onChange(e) {
    this.setState({
      selsectedUser: e.target.value,
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(setAuthedUser(this.state.selsectedUser));
  };

  render() {
    const { users } = this.props;
    const userList = Object.keys(users);
    //console.log("question from Login Comp: ", question);

    /* // This is for any non-existent (or newly created) question:
    if (question === null || question === undefined) {
      return (
        <>
          <br />
          <br />
          <div style={{ margin: "auto", width: 580, textAlign: "center" }}>
            <h1> This question doesn't exist.</h1>
            <h2>
              Go to Home from the Navigation above to find new polls from
              friends!
            </h2>
          </div>
          <br />
          <br />
        </>
      );
    }
*/

    return (
      <>
        {userList.length !== 0 ? (
          <div className="login">
            <div className="login-info">
              <h1 style={{ fontWeight: 600 }}>
                Please Login
                <br />
              </h1>
              <h3>Who are your?</h3>
              <form onSubmit={this.handleLogin}>
                <div
                  className="radio ui container center"
                  style={{ width: "90%", padding: "5px 10px" }}
                >
                  <div
                    className="ui three column grid"
                    style={{ margin: "-15px 0 40px 0" }}
                  >
                    {userList.map((user) => (
                      <label key={user} style={{ width: "33.33%" }}>
                        <input
                          style={{ visibility: "hidden" }}
                          type="radio"
                          value={user}
                          checked={this.state.selsectedUser === users[user].id}
                          onChange={this.onChange}
                          name="user"
                          className="card-input-element"
                        />
                        <div
                          className="ui fluid card card-input"
                          onChange={this.onChange}
                          value={user}
                        >
                          <div
                            className="image"
                            style={{ backgroundColor: "#fff" }}
                          >
                            <img
                              style={{ width: "100%", height: "100%" }}
                              alt={users[user].name}
                              src={users[user].avatarURL}
                            />
                          </div>
                          <div className="content" value={user}>
                            <span className="names" value={user}>
                              {users[user].name}
                            </span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <button
                    className="btn view"
                    type="submit"
                    disabled={this.state.selsectedUser === ""}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

function mapStateToProps({ authedUser, users }, { id }) {
  return {
    authedUser,
    users,
    // no need for the next line (for now)
    //question: questions[id],
  };
}

export default withRouter(connect(mapStateToProps)(Login));
