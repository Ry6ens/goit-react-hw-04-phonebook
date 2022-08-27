import styles from "./ContactForm.module.scss";
import stylesButton from "../PhonebookOptions/PhonebookOptions.module.scss";

import { useState } from "react";
import PhonebookOptions from "../PhonebookOptions/PhonebookOptions";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default function Form() {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const { name, number } = state;

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // onSubmit(() => ({ ...state }));
    e.reset();
    // reset(
    //   setState({
    //     name: "",
    //     number: "",
    //   })
    // );
  };

  const handleChange = ({ target }) => {
    setState((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formGroup}>
      <div className={styles.thumb}>
        <label htmlFor={nameId} className={styles.label}>
          Name
        </label>
        <input
          id={nameId}
          className={styles.field}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
        />
      </div>
      <div className={styles.thumb}>
        <label htmlFor={numberId} className={styles.label}>
          Number
        </label>
        <input
          id={numberId}
          className={styles.field}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
        />
      </div>
      <PhonebookOptions title="Add contact" className={stylesButton.button} />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
