import React from "react";

const Person = props => {
  return (
    <div>
      <p>
        My Name is {props.name} and jersey number : {props.num}
      </p>
      {/* If component is render like html tag and display the inner contents then use children */}
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
