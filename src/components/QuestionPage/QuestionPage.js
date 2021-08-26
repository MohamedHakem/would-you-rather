import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UnAnsweredQuestion from "./UnAnsweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";

class QuestionPage extends Component {
  componentDidMount() {
    this.setState({
      loading: false,
    });
  }
  render() {
    const { question, authedUser, id } = this.props;

    return (
      <Fragment>
        {(question && question.optionOne.votes.includes(authedUser) === true) ||
        (question && question.optionTwo.votes.includes(authedUser) === true) ? (
          <AnsweredQuestion id={id} />
        ) : (
          <UnAnsweredQuestion id={id} />
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const { id } = props.match.params;

  return {
    id,
    authedUser,
    question: questions[id],
    notFound: !questions[id] ? true : false,
  };
}

export default connect(mapStateToProps)(QuestionPage);
