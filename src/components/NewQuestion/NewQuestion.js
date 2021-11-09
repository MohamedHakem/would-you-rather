import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/questions";
import { Redirect } from "react-router-dom";
import "./NewQuestion.css";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };

  handleOptionOneText = (e) => {
    const optionOneText = e.target.value;
    this.setState(() => ({
      optionOneText,
    }));
  };
  handleOptionTwoText = (e) => {
    const optionTwoText = e.target.value;
    this.setState(() => ({
      optionTwoText,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddQuestion({ optionOneText, optionTwoText }));

    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      toHome: true,
    }));
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/would-you-rather/" />;
    }

    return (
      <div className="new-question-container">
        <h1 className="center">Create New Question</h1>
        <div>
          <h3 className="center">Would you rather...</h3>
          <form className="new-question" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="name"
              className="option-1"
              name="name"
              value={optionOneText}
              onChange={this.handleOptionOneText}
              placeholder="Do this..."
              required
              maxLength={100}
            />
            <span className="or-seperator">OR</span>

            <input
              type="text"
              id="name"
              className="option-2"
              name="name"
              value={optionTwoText}
              onChange={this.handleOptionTwoText}
              placeholder="Do this..."
              required
              maxLength={100}
            />
            <button
              className="btn"
              type="submit"
              disabled={optionOneText === "" || optionTwoText === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

//needed from the store for the handleAddQuestionToUsers
//authedUser
//users
//questions
//question.id

export default connect()(NewQuestion);
