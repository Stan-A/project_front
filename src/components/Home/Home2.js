import React, { useState } from 'react';
import TopicList from './TopicList';
import TopicForm from './TopicForm';

function Forum() {
  const [topics, setTopics] = useState([]);

  const addTopic = (title, description, author) => {
    setTopics([...topics, { title, description, author }]);
  };

  return (
    <div>
      <h1>Forum</h1>
      <TopicList topics={topics} />
      <TopicForm onAddTopic={addTopic} />
    </div>
  );
}

export default Forum;
