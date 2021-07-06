import React, { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import AddContact from "./components/AddContact";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 1111111 },
  ]);
  const [formData, setFormData] = useState();
  const [filterPhrase, setFilterPhrase] = useState("");

  let filteredNames = persons.filter((person) =>
    person.name.includes(filterPhrase)
  );

  return (
    <div>
      <Filter filterPhrase={filterPhrase} setFilterPhrase={setFilterPhrase} />
      <AddContact
        formData={formData}
        setFormData={setFormData}
        setPersons={setPersons}
        filterPhrase={filterPhrase}
        persons={persons}
      />
      <Persons
        persons={persons}
        filterPhrase={filterPhrase}
        filteredNames={filteredNames}
      />
    </div>
  );
};

export default App;
