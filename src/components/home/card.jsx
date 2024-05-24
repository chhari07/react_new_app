import React from 'react';


const card = ({ id, cover, category, title, authorName, authorImg, time }) => {
  return (
    <div className='box'>
      <div className='img'>
        <img src={cover} alt={title} />
      </div>
      <div className='text'>
        <span className='category'>{category}</span>
        <h1 className='titleBg'>{title}</h1>
        <div className='author flex'>
          <img src={authorImg} alt={authorName} className='authorImg' />
          <span>By {authorName}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
