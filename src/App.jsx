import { useEffect, useState } from 'react';
import Tabs from './Tabs';
import { Content } from './Content';

function App() {
  const [tabLinks, setTabLinks] = useState([
    {
      id: 1,
      tabName: 'users',
      tabId: 'users-tab',
      isActive: true,
    },
    {
      id: 2,
      tabName: 'posts',
      tabId: 'posts-tab',
      isActive: false,
    },
    {
      id: 3,
      tabName: 'comments',
      tabId: 'comments-tab',
      isActive: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState('users');
  const [content, setContent] = useState('');

  function handleActiveTab(id) {
    const activeTab = tabLinks.find((item) => item.id === id);

    const newTabs = tabLinks.map((tab) =>
      tab.id == id ? { ...tab, isActive: true } : { ...tab, isActive: false }
    );

    setTabLinks(newTabs);
    setActiveTab(activeTab.tabName);
  }

  useEffect(() => {
    const fetchContent = async () => {
      const API_URL = `https://jsonplaceholder.typicode.com/${activeTab}`;
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        setContent(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContent();
  }, [activeTab]);

  return (
    <main className="main">
      <Tabs tabLinks={tabLinks} handleActiveTab={handleActiveTab} />
      {content ? <Content content={content} /> : ''}
    </main>
  );
}

export default App;
