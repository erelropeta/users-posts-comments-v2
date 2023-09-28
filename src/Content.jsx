import TableBody from './TableBody';
import TableHeader from './TableHeader';
import './content.css';

export const Content = ({ content, activeTab }) => {
  const header_list = Object.keys(content[0]);

  return (
    <section className="content">
      <table className="table">
        <TableHeader content={content} />
        <TableBody content={content} activeTab={activeTab} />
      </table>
    </section>
  );
};
