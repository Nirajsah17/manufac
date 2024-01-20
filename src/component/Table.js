const Table = ({ data , propertyName}) => {
  const tableRows = Object.keys(data);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th key={"measure"}>Measure</th>
            {tableRows.map((item) => (
              <th key={item}> class {item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>{propertyName} Mean</b></td>
            {tableRows.map((item) => (
              <td key={item}>{data[item].mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td><b>{propertyName} Median</b></td>
            {tableRows.map((item) => (
              <td key={item}>{data[item].median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td><b>{propertyName} Mode</b></td>
            {tableRows.map((item) => (
              <td key={item}>{data[item].mode.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;


// table => 1
// mode avg
// Readme 