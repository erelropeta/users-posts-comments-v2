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
      url: 'https://jsonplaceholder.typicode.com/users',
    },
    {
      id: 2,
      tabName: 'posts',
      tabId: 'posts-tab',
      isActive: false,
      url: 'https://jsonplaceholder.typicode.com/posts',
    },
    {
      id: 3,
      tabName: 'comments',
      tabId: 'comments-tab',
      isActive: false,
      url: 'https://jsonplaceholder.typicode.com/comments',
    },
  ]);
  const [contentURL, setContentURL] = useState(
    'https://jsonplaceholder.typicode.com/users'
  );
  const [content, setContent] = useState('');

  function handleActiveTab(id) {
    const activeTab = tabLinks.find((item) => item.id === id);

    const newTabs = tabLinks.map((tab) =>
      tab.id == id ? { ...tab, isActive: true } : { ...tab, isActive: false }
    );

    setTabLinks(newTabs);
    setContentURL(activeTab.url);
  }

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(contentURL);

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
  }, [contentURL]);

  return (
    <main className="main">
      <Tabs tabLinks={tabLinks} handleActiveTab={handleActiveTab} />
      {content ? <Content content={content} /> : ''}
    </main>
  );
}

export default App;
