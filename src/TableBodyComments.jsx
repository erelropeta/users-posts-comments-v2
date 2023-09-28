const TableBodyComments = ({ content }) => {
  return (
    <>
      {content.map(({ postId, id, name, email, body }) => (
        <tr key={id} className="table__row">
          <td className="table__data">{postId}</td>
          <td className="table__data">{id}</td>
          <td className="table__data">{name}</td>
          <td className="table__data">{email}</td>
          <td className="table__data">{body}</td>
        </tr>
      ))}
    </>
  );
};

export default TableBodyComments;
