import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import AddContact from "./components/AddContact";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [formData, setFormData] = useState();
  const [filterPhrase, setFilterPhrase] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
