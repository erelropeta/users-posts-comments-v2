import './tabs.css';

const Tabs = ({ tabLinks, handleActiveTab }) => {
  return (
    <div className="tabs">
      {tabLinks.map(({ id, tabName, isActive }) => {
        let className = 'tabs__btn';

        if (isActive) {
          className += ' tabs__btn--active';
        }

        return (
          <button
            key={id}
            className={className}
            onClick={() => handleActiveTab(id)}
            type="button"
          >
            {tabName}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
