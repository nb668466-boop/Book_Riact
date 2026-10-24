// import logo from './logo.svg';
import './App.css';
import AddBood from './components/AddBook';
// import Book from './components/Book';
import BookList from './components/BookList';
import { useState } from 'react';

function App() {
  const [book, setBook] = useState([
    { name: "good girl", code: 1234, price: 34, discount: 75, quantity: 39, author: "yosef", Category: ["Teens", "Children"] },
    { name: "jordn", code: 8888, price: 99, discount: 0, quantity: 90, author: "menashe", Category: ["Men", "Married", "Adults"] },
    { name: "Human psyche", code: 2222, price: 32, discount: 20, quantity: 0, author: "yona sapir", Category: ["Psychology", "Emotion", "Women"] },
    { name: "stivan koby", code: 9987, price: 154, discount: 25, quantity: 55, author: "menashe", Category: ["Psychology", "Emotion", "Men"] }
  ]);

  return (
    <div className="books">
      <BookList bookList={book} />
      <AddBood setBook={setBook}/>
    </div>
  );
}

/*
function Books(){
  const booklist = [
    { name: "good girl", code: 1234, price: 34, discount: 75, quantity: 39, author: "yosef", Category: ["Teens", "Children"] },
    { name: "jordn", code: 8888, price: 99, discount: 0, quantity: 90, author: "menashe", Category: ["Men", "Married", "Adults"] },
    { name: "Human psyche", code: 2222, price: 32, discount: 20, quantity: 0, author: "yona sapir", Category: ["Psychology", "Emotion", "Women"] },
    { name: "stivan koby", code: 9987, price: 154, discount: 25, quantity: 55, author: "menashe", Category: ["Psychology", "Emotion", "Men"] }
  ];

  return (
    <div className="books">
      {booklist.map((a, i) => (
        <Book
          key={i}
          name={a.name}
          code={a.code}
          price={a.price}
          discount={a.discount}
          quantity={a.quantity}
          author={a.author}
          Category={a.Category}
        />
      ))}
    </div>
  );
}
*/

export default App;