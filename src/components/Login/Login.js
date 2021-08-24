import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setAuthedUser } from "../../actions/authedUser";

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

    console.log("this.props from UnAnsweredQuestion: ", this.props);
    console.log("userList from UnAnsweredQuestion: ", userList);
    console.log(
      "this.state.selsectedUser from UnAnsweredQuestion: ",
      this.state.selsectedUser
    );

    /*
    if (question === null) {
      return <p>This question doesn't exist.</p>;
    }
    */

    console.log("users from UnAnsweredQuestion: ", users);
    console.log(
      "selsectedUser from UnAnsweredQuestion: ",
      this.state.selsectedUser
    );
    return (
      <div className="login">
        <div className="login-info">
          <p style={{ fontWeight: 600 }}>
            Please login first <br />
          </p>
          {userList.length !== 0 ? (
            <form onSubmit={this.handleLogin}>
              {userList.map((user) => (
                <div className="radio" key={user}>
                  <label>
                    <input
                      type="radio"
                      value={user}
                      checked={this.state.selsectedUser === users[user].id}
                      onChange={this.onChange}
                    />
                    {users[user].name}
                  </label>
                </div>
              ))}

              <div>Selected option is : {this.state.selsectedUser}</div>
              <button
                className="btn view"
                type="submit"
                disabled={this.state.selsectedUser === ""}
                //onClick={() => {this..history.push("/add");}}
              >
                Login
              </button>
            </form>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }, { id }) {
  return {
    authedUser,
    users,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
