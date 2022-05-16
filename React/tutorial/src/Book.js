import React from 'react';

const Book = (props) => {
  const { bookInfo } = props;
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(bookInfo.title);
      }}>
      <img src={bookInfo.imgSrc} alt='' />
      <h1>{bookInfo.title}</h1>
      <h4>{bookInfo.price}</h4>
      <p>{['this', ' ', 'is', ' ', 'an', ' ', 'array']}</p>
    </article>
  );
};

// 使用default导出的变量可以任意重命名
export default Book;
