import TableBody from './TableBody';
import TableHeader from './TableHeader';
import './content.css';

export const Content = ({ isLoading, content, activeTab }) => {
  return (
    <section className="content">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <table className="table">
          <TableHeader content={content} />
          <TableBody content={content} activeTab={activeTab} />
        </table>
      )}
    </section>
  );
};
