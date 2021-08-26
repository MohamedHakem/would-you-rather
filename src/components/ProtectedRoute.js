import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (props.authedUser !== null && props.authedUser !== "") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname:
                  "https://mohamedhakem.github.io/would-you-rather/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
