import React from 'react';

export function Comment({ comment }) {
  const { id, text } = comment
  return (
    <li key={id} className='comment comment-in-list'>
      <span>{text}</span>
    </li>
  );
}
