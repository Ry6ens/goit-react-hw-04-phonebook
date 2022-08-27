import { useState } from "react";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";

import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import useLocalStorage from "../hooks/useLocalStorage";

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const addContact = (data) => {
    if (isDuplicate(data)) {
      return Notiflix.Notify.warning(`${data.name} is already in contacts`);
    }
    setContacts((prevContacts) => {
      const newContact = { id: nanoid(), ...data };
      return [...prevContacts, newContact];
    });
  };

  const removeContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((item) => item.id !== id);
    });
  };

  const isDuplicate = ({ name }) => {
    return contacts.find((item) => item.name === name);
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getFilterItems = () => {
    console.log(filter);
    console.log(contacts);

    if (!filter) {
      return contacts;
    }
    const normalizeFilterToLowerCase = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizeFilterToLowerCase)
    );
  };

  const FilterItems = getFilterItems();

  return (
    <div className="container">
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter onChangeFilter={handleFilter} />
        <ContactList items={FilterItems} removeItem={removeContact} />
      </Section>
    </div>
  );
}
