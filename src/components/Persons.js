import React from "react";
import Person from "./Person";

const Persons = ({ persons, filterPhrase, filteredNames }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filterPhrase === ""
        ? persons.map((person) => <Person key={person.name} {...person} />)
        : filteredNames.map((person) => (
            <Person key={person.name} {...person} />
          ))}
    </div>
  );
};

export default Persons;
