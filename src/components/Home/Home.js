/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "@material-ui/core";
import HomeCard from "./HomeCard";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  handleChange = (e) => {
    this.state.selectedTab === 0
      ? this.setState({ selectedTab: 1 })
      : this.setState({ selectedTab: 0 });
  };

  render() {
    const { authedUser, questions } = this.props;
    const answeredQuestions_1 = this.props.questionIds.filter(
      (qid) => questions[qid].optionOne.votes.includes(authedUser) === true
    );
    const answeredQuestions_2 = this.props.questionIds.filter(
      (qid) => questions[qid].optionTwo.votes.includes(authedUser) === true
    );

    const answeredQuestions_sorted = answeredQuestions_1
      .concat(answeredQuestions_2)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return (
      <>
        <Tabs value={this.state.selectedTab} onChange={this.handleChange}>
          <Tab label="Un-Answered" />
          <Tab label="Answered" />
        </Tabs>
        {this.state.selectedTab === 0 && (
          <div>
            <ul className="outer-list" style={{ padding: 15 }}>
              {this.props.questionIds.map((id) =>
                questions[id].optionOne.votes.includes(authedUser) === true ||
                questions[id].optionTwo.votes.includes(authedUser) ===
                  true ? null : (
                  <li className="answered-question-item" key={id}>
                    <HomeCard id={id} />
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        {this.state.selectedTab === 1 && (
          <div>
            <ul className="outer-list" style={{ padding: 15 }}>
              {console.log(
                "Check this Final version: ",
                answeredQuestions_sorted
              )}
              {this.props.questionIds
                .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
                .map((id) =>
                  questions[id].optionOne.votes.includes(authedUser) === true ||
                  questions[id].optionTwo.votes.includes(authedUser) ===
                    true ? (
                    <li className="answered-question-item" key={id}>
                      <HomeCard id={id} />
                    </li>
                  ) : null
                )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(Home);
