import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
// import FilterContacts from './FilterContacts/FilterContacts';
// import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      // contacts: [],
      filter: '',
    };
  }

  handleContactAdd = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  // findContact = filter => {
  //   const { contacts } = this.state;

  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  //   this.setState({ contacts: filteredContacts });
  // };

  render() {
    const { contacts } = this.state;

    return (
      <div className="wraper">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList onSubmit={this.handleContactAdd}>
          {contacts.map(contact => {
            return (
              <li key={contact.id}>
                <span>{contact.name}</span>
                <span>: {contact.number}</span>{' '}
              </li>
            );
          })}
        </ContactList>
      </div>
    );
  }
}
