const { Component } = require('react');

class FilterContacts extends Component {
  handleChange = evt => {
    const { onChange } = this.props;
    const { value } = evt.target;
    onChange(value);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search name..."
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default FilterContacts;
