import React from 'react';

export function Comment({ comment }) {
  const { id, text } = comment
  return (
    <li key={id} className='comment-container'>
      <span>{text}</span>
    </li>
  );
}
