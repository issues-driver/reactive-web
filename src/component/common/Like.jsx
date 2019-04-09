import React from "react";

const Like = ({ liked, onLiked }) => {
  let heartClass = "fa fa-heart";
  if (!liked) {
    heartClass += "-o";
  }
  return <i onClick={onLiked} className={heartClass} aria-hidden="true" />;
};

export default Like;
