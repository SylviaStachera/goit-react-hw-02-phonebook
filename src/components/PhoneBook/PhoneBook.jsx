const { Component } = require('react');

class PhoneBook extends Component {
  render() {
    const { onSubmit, onChange } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhoneBook;
