const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        autoComplete="off"
        placeholder="Search name..."
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
