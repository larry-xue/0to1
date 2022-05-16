import React from 'react'; // from react17, we don't need import react
import ReactDOM from 'react-dom';
import Book from './Book';

// CSS
import './index.css';

// Data
import { books } from './books';

function BookList() {
  const list = books.map((val, idx) => <Book bookInfo={val} key={idx} />);
  return <section className='booklist'>{list}</section>;
}

ReactDOM.render(<BookList />, document.getElementById('root'));
