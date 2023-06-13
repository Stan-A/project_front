import React from 'react';

function TopicList(props) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {props.topics.map((topic, index) => (
          <li key={index}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <small>by {topic.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
