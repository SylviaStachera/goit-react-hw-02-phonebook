import css from './AddNumber.module.css';

const { Component } = require('react');

class AddNumber extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
        />
      </label>
    );
  }
}

export default AddNumber;
