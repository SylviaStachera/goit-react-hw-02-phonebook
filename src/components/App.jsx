import PhoneBook from './PhoneBook/PhoneBook';
import AddName from './AddName/AddName';
import AddNumber from './AddNumber/AddNumber';
import Contacts from './Contacts/Contacts';
// import FilterContacts from './FilterContacts/FilterContacts';
import { Component } from 'react';
import { nanoid } from 'nanoid';

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
      name: '',
      number: '',
      filter: '',
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    this.resetForm();
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
      filter: '',
    });
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
        <PhoneBook onSubmit={this.handleSubmit}>
          <AddName onChange={this.handleChange} />
          <AddNumber onChange={this.handleChange} />
        </PhoneBook>
        <Contacts findContact={this.findContact}>
          {/* <FilterContacts onChange={this.findContact} /> */}
          {contacts.map(contact => {
            return (
              <li key={contact.id}>
                <span>{contact.name}</span>
                <span>: {contact.number}</span>{' '}
              </li>
            );
          })}
        </Contacts>
      </div>
    );
  }
}
