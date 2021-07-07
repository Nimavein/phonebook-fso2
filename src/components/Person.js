import React from "react";
import DeleteContact from "./DeleteContact";

const Person = ({ name, number, id, persons, setPersons }) => {
  console.log(persons);
  return (
    <div>
      <p>
        {name} : {number}
      </p>
      <DeleteContact id={id} persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default Person;
