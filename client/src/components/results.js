import React from "react";

const Results = ({ words }) => {
  return (
    <div>
      <div>Word | Response | Time</div>
      <ul>
        {words.splice(1).map(item => (
          <li>
            {item.word} | {item.response} | {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
