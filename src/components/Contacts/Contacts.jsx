const { Component } = require('react');

class Contacts extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <h2>Contacts</h2>
        <ul>{children}</ul>
      </div>
    );
  }
}

export default Contacts;
