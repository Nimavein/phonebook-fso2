import React from "react";
import Person from "./Person";

const Persons = ({ persons, setPersons, filterPhrase, filteredNames }) => {
  console.log(persons);
  return (
    <div>
      <h2>Numbers</h2>
      {filterPhrase === ""
        ? persons.map((person) => (
            <Person
              key={person.name}
              {...person}
              persons={persons}
              setPersons={setPersons}
            />
          ))
        : filteredNames.map((person) => (
            <Person
              key={person.name}
              {...person}
              persons={persons}
              setPersons={setPersons}
            />
          ))}
    </div>
  );
};

export default Persons;
