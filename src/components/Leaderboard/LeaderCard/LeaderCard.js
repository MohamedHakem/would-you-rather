import React from "react";
import "./LeaderCard.css";

const LeaderCard = (props) => {
  console.log("from inside LeaderCard: ", props);

  const answered_questions = Object.keys(props.user.answers).length;
  console.log("answered_question: ", answered_questions);

  const created_questions = Object.keys(props.user.questions).length;
  console.log("created_questions: ", created_questions);

  const score = answered_questions + created_questions;
  console.log("score: ", score);

  return (
    <div className="question">
      <img
        className="avatar"
        src={props.user.avatarURL}
        alt={`Avatar of ${props.user.name}`}
      />
      <div className="question-info">
        <h3>{`${props.user.name}`}</h3>
        <p>{`Answered questions ${answered_questions}`}</p>
        <p>{`Created questions ${created_questions}`}</p>
        <p>{`Score:  ${score}`}</p>
      </div>
    </div>
  );
};

export default LeaderCard;
