import React, { useState } from 'react';

function TopicForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTopic(title, description, author);
    setTitle('');
    setDescription('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new topic</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <label>Author:</label>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
}

export default TopicForm;