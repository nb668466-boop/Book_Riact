// import logo from './logo.svg';
import './App.css';
import HighRating from "./components/HighRating";
import AddBood from './components/AddBook';
// import Book from './components/Book';
import BookList from './components/BookList';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  let sum = 0;
  const [newBook, setNewBook] = useState(null);
  const [book, setBook] = useState([]);
  useEffect(() => {
    (async function () {
      const res = await fetch('http://localhost:3000/api/books');
      const data = await res.json();
      console.log(data)
      setBook(data);
    })()
  }, []);

  useEffect(() => {
    if (newBook == null) return;
    postData();
  }, [newBook])



 

  async function postData() {

    const res = await fetch('http://localhost:3000/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook)
    });
    const data = await res.json();
    if (data.code > 0) setBook(prev => prev.concat(data));
    
  }

  async function Delete(code) {
  const res = await fetch(`http://localhost:3000/api/books/${code}`, {
    method: 'DELETE'
  });

  if (res.ok) {
    setBook(prev => prev.filter(b => b.code !== code));
  }
}
  


  for (let i = 0; i < book.length; i++) {
    sum += book[i].rating;

  }





  return (
    <div className="books">
      <HighRating book={book} Delete={Delete}/>
      <BookList bookList={book} setBook={setBook} Delete={Delete}/>
      <AddBood setBook={setBook} newBook={newBook} setNewBook={setNewBook} />

    </div>
  );
}


export default App;
/*useState([
    { name: "good girl", code: 1234, price: 34, discount: 75, quantity: 39, author: "yosef", Category: ["Teens", "Children"] ,rating:1},
    { name: "jordn", code: 8888, price: 99, discount: 0, quantity: 90, author: "menashe", Category: ["Men", "Married", "Adults"],rating:1},
    { name: "Human psyche", code: 2222, price: 32, discount: 20, quantity: 0, author: "yona sapir", Category: ["Psychology", "Emotion", "Women"],rating:1 },
    { name: "stivan koby", code: 9987, price: 154, discount: 25, quantity: 55, author: "menashe", Category: ["Psychology", "Emotion", "Men"] ,rating:1}
  ])*/
