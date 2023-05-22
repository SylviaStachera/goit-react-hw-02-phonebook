import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';
const { Component } = require('react');

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      number: '',
    };
  }

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };

    this.props.onSubmit(newContact);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { onSubmit } = this.props;

    return (
      <form className={css.form} onSubmit={onSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={css['btn-submit']} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
