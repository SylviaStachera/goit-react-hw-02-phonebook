const { Component } = require('react');

class ContactList extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <ul>{children}</ul>
      </div>
    );
  }
}

export default ContactList;
