import './Grid.css';

const Grid = ({ render, recordsPerPage, column }) => {
  render.length = recordsPerPage;
  return (
    <>
      <form className="form">
        <label>Records Count </label>
        <select>
          <option>{recordsPerPage}</option>
        </select>
      </form>
      <table className="table">
        <thead>
          <tr>
            {column.map((col) => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
          <>
            {render?.map((d, i) => (
              <>
                <tr>
                  <td key={i}> {d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                  <td>{d.address && d.address.city}</td>
                  <td>{d.phone}</td>
                  <td>{d.website}</td>
                  <td>{d.company && d.company.name}</td>
                </tr>
              </>
            ))}
          </>
        </thead>
      </table>
    </>
  );
};
export default Grid;
