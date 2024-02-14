export const Filter = ({ filter, onUpdateFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => onUpdateFilter(e.target.value)}
      />
    </>
  );
};
