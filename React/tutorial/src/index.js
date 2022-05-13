import React from 'react'; // from react17, we don't need import react
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <article className='book'>
    <Image></Image>
    <Title></Title>
    <Price></Price>
  </article>
);

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/715LOAwhQcL._AC_UL160_SR160,160_.jpg'
    alt=''
  />
);
const Title = () => <h1>可调节狗坡道,适合所有狗和猫-</h1>;
const Price = () => (
  // 这个双括号不是特殊语法
  // 第一个括号让我们回到了JavaScript环境
  // 第二个括号表示一个对象
  //  style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
  <h4>$76.49</h4>
);

ReactDOM.render(<BookList />, document.getElementById('root'));
