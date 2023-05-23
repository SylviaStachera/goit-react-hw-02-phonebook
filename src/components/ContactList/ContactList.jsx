const ContactList = ({ contacts }) => {

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>: {contact.number}</span>{' '}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
