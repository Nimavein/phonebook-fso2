import axios from "axios";
import React from "react";
import noteService from "../services/notes";

const AddContact = ({ formData, persons, setFormData, setPersons }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const addedPerson = {
      name: formData.name,
      number: formData.number,
    };
    let exists = persons.some((item) => item.name === addedPerson.name);
    if (!exists) {
      noteService.create(addedPerson).then((response) => {
        setPersons(persons.concat(response.data));
      });
    } else {
      alert(`${addedPerson.name}'s number is already added to phonebook`);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
    console.log(formData);
  };

  return (
    <div>
      <h3>add new</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          name:
          <input id="name" onChange={handleFormChange} />
        </div>
        <div>
          number: <input id="number" onChange={handleFormChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
