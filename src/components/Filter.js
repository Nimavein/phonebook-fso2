import React from "react";

const Filter = ({ filterPhrase, setFilterPhrase }) => {
  const handleFilter = (e) => {
    setFilterPhrase(e.currentTarget.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>filter</h3>
      <form>
        <input onChange={handleFilter} value={filterPhrase} />
      </form>
    </div>
  );
};

export default Filter;
