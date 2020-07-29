import React from "react";
import classses from "./person.module.css";

const person = (probs) => {
  return (
    <div className={classses.Person}>
      <p onClick={probs.click}>
        I'm {probs.name} and I am {probs.age} years old!
      </p>
      <p>{probs.children}</p>
      <input type="text" onChange={probs.changed} value={probs.name} />
    </div>
  );
};

export default person;
