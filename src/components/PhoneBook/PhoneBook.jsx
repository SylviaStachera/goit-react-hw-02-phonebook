import css from './PhoneBook.module.css';

const { Component } = require('react');

class PhoneBook extends Component {
  render() {
    const { onSubmit, children } = this.props;

    return (
      <form className={css.form} onSubmit={onSubmit}>
        {children}
        <button className={css['btn-submit']} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default PhoneBook;
