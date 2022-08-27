// import { useState } from "react";
// import { nanoid } from "nanoid";
// import Notiflix from "notiflix";

import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { useState } from "react";

export default function App(params) {
  const [contacts, setContact] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = () => {};

  const removeContact = () => {};

  // const isDuplicate = () => {};

  const handleFilter = () => {};

  const getFilterItems = () => {};

  return (
    <div className="container">
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      {/* <Section title="Contacts">
        <Filter onChangeFilter={handleFilter} />
        <ContactList items={getFilterItems} removeItem={removeContact} />
      </Section> */}
    </div>
  );
}
