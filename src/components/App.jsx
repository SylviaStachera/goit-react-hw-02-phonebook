import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      name: '',
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    
    const form = evt.currentTarget;
    const newItem = this.state.name;

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newItem],
    }));

    form.reset();
  };

  handleChange = evt => {
    this.setState({ name: evt.target.value });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className='wraper'>
        <h1>Phonebook</h1>
        <PhoneBook onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <Contacts>
          {contacts.map(contact => {
            return <li key={nanoid()}>{contact}</li>;
          })}
        </Contacts>
      </div>
    );
  }
}
