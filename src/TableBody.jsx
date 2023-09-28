import TableBodyUsers from './TableBodyUsers';
import TableBodyPosts from './TableBodyPosts';
import TableBodyComments from './TableBodyComments';
import './tablebody.css';

const TableBody = ({ content, activeTab }) => {
  return (
    <tbody className="table__body">
      {activeTab == 'users' && <TableBodyUsers content={content} />}
      {activeTab == 'posts' && <TableBodyPosts content={content} />}
      {activeTab == 'comments' && <TableBodyComments content={content} />}
    </tbody>
  );
};

export default TableBody;
