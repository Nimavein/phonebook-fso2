import axios from "axios";
import React from "react";
import noteService from "../services/notes";

const DeleteContact = ({ id, persons, setPersons }) => {
  console.log(persons);
  const deleteContact = (id) => {
    const newPeople = persons.filter((person) => person.id !== id);
    noteService.deleteContact(id).then(() => {
      setPersons(newPeople);
    });
  };
  return (
    <div>
      <button onClick={(e) => deleteContact(id)}>delete</button>
    </div>
  );
};

export default DeleteContact;
