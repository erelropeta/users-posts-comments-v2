const TableBodyUsers = ({ content }) => {
  return (
    <>
      {content.map(
        ({ id, name, username, email, address, phone, website, company }) => (
          <tr key={id} className="table__row">
            <td className="table__data">{id}</td>
            <td className="table__data">{name}</td>
            <td className="table__data">{username}</td>
            <td className="table__data">{email}</td>
            <td className="table__data">{JSON.stringify(address)}</td>
            <td className="table__data">{phone}</td>
            <td className="table__data">{website}</td>
            <td className="table__data">{JSON.stringify(company)}</td>
          </tr>
        )
      )}
    </>
  );
};

export default TableBodyUsers;
