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
    console.log("this.props from QuestionPage: ", this.props);
    const { question, authedUser, id } = this.props;

    /*
    console.log(
      "Does tylermcginnes answered this question or not: ",
      question.optionOne.votes.includes(authedUser) === true ||
        question.optionTwo.votes.includes(authedUser) === true
        ? true
        : false
    );
    */

    /* {this.props.questionIds.map((id) =>
        questions[id].optionOne.votes.includes(authedUser) === true ||
        questions[id].optionTwo.votes.includes(authedUser) === true ? (
          <li className="answered-question-item" key={id}>
            <HomeCard id={id} />
          </li>
        ) : null
        )} 
      */

    return (
      <Fragment>
        {(question && question.optionOne.votes.includes(authedUser) === true) ||
        (question && question.optionTwo.votes.includes(authedUser) === true) ? (
          <AnsweredQuestion id={id} />
        ) : (
          <UnAnsweredQuestion id={id} />
        )}
        {/*
          console.log(
          "Does tylermcginnes answered this question or not: ",
          question.optionOne.votes.includes(authedUser) === true ||
            question.optionTwo.votes.includes(authedUser) === true
            ? true
            : false
          ) 
        */}
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;

  return {
    id,
    authedUser,
    question: questions[id],
    notFound: !questions[id] ? true : false,
  };
}

export default connect(mapStateToProps)(QuestionPage);
