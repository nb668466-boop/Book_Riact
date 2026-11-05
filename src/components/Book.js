import './Book.css';
import { useState } from 'react';
function Book(props) {
    const {name,code, price,discount,quantity,author,Category,rating,setBook} = props;
    Book.defaultProps = { author:"anonymous" }
    const[color, colorcheng] = useState(false);
    const[stoc_quantity,fun_quantity]=useState(quantity);
    const[Delete,setDelete]=useState(true);
   
    if (Delete){
   return (<div className={quantity === 0 ? "gray" :discount > 50? "expensive": "clas" }>
      <h1 >Book</h1>
      <p> name book: {name}</p>
      <p> code book: {code}</p>
      <p> name author: {author}</p>
      <p> price: {price}</p>
      <div>
        {discount>0 && <p>price discount: {(1-((discount/100)))*price }</p>}
      </div>
       <div>
        {quantity===0 && <h1>The book is out of stock</h1>}
      </div>
      <p> in stock: {stoc_quantity}</p>
      <button onClick={(e)=> fun_quantity(x=>x+1)}>Another book</button>
      <button onClick={(e) => alert('The product has been successfully added to the cart!')}>To order the product, click here</button>
      
      <h3> Category: </h3>
      <ul>
       {Category.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
      <button onClick={(e)=>colorcheng(x=>!x)}> I haven’t decided yet</button>
      {/* אם הצבע טרו אז העיצוב הזוהר מוסף*/}
      {color && (
       <div className="undecided-bar">
         Take your time, the book will wait
        </div>
        )}

        <button  className="delete-btn" onClick={(e)=>setDelete(d=>!d)}>Delete!</button>
        
<div dir="ltr">
  {[1, 2, 3, 4, 5].map((n) => (
    <span
      key={n}
      onClick={() =>
        setBook(prev =>
          [...prev].map(b => (b.code === code ? { ...b, rating: n } : b))
        )
      }
      style={{ cursor: "pointer", fontSize: 32, color: n <= rating ? "gold" : "#ccc" }}
    >
      ★
    </span>
  ))}



</div>  

       

      </div>
      
      


    );
  }
}

export default Book;