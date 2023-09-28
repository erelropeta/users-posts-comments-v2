const TableBodyPosts = ({ content }) => {
  return (
    <>
      {content.map(({ userId, id, title, body }) => (
        <tr key={id} className="table__row">
          <td className="table__data">{id}</td>
          <td className="table__data">{userId}</td>
          <td className="table__data">{title}</td>
          <td className="table__data">{body}</td>
        </tr>
      ))}
    </>
  );
};

export default TableBodyPosts;
