import TableBody from './TableBody';
import TableHeader from './TableHeader';
import './content.css';

export const Content = ({ content }) => {
  return (
    <section className="content">
      <table className="table">
        <TableHeader content={content} />
        <TableBody content={content} />
      </table>
    </section>
  );
};
