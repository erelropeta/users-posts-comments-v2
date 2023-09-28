import './tableheader.css';

const TableHeader = ({ content }) => {
  const header_list = Object.keys(content[0]);

  return (
    <thead className="table__header">
      <tr className="table__row">
        {header_list.map((header, index) => (
          <th key={index} className="table__head">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
