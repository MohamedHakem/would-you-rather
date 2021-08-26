import React from "react";
import "./LeaderCard.css";

const LeaderCard = (props) => {
  const answered_questions = Object.keys(props.user.answers).length;
  const created_questions = Object.keys(props.user.questions).length;

  const score = answered_questions + created_questions;

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
