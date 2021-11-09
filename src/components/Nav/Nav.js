import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { unSetAuthedUser } from "../../actions/authedUser";
import "./Nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      selsectedUser: "",
      toHome: false,
    };
    this.onChange = this.onClick.bind(this);
    this.handleSubmit = this.handleLogout.bind(this);
  }

  onClick(e) {
    this.setState({
      selsectedUser: null,
    });
  }

  logout = () => {
    //  this..history.push("/login");
  };

  handleLogout = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(unSetAuthedUser(this.state.selsectedUser));

    this.setState(() => ({
      toHome: true,
    }));

    this.logout();
  };

  render() {
    const { users, authedUser, toHome } = this.props;

    if (toHome === true) {
      return <Redirect to="/would-you-rather/" />;
    }

    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/would-you-rather/"
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/would-you-rather/add"
              exact
              activeClassName="active"
            >
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/would-you-rather/leaderboard"
              exact
              activeClassName="active"
            >
              Leader Board
            </NavLink>
          </li>
        </ul>
        {this.props.users[authedUser] ? (
          <div className="current-user">
            <span>
              Hello,{" "}
              <span style={{ fontWeight: 600 }}>{users[authedUser].name}</span>!
            </span>
            <span>
              <img
                src={users[authedUser].avatarURL}
                alt={users[authedUser].name}
              />
            </span>

            <Link to="https://mohamedhakem.github.io/would-you-rather/login">
              <button className="logout-btn" onClick={this.handleLogout}>
                Logout
              </button>
            </Link>
          </div>
        ) : null}
      </nav>
    );
  }
}

export default connect()(Nav);
