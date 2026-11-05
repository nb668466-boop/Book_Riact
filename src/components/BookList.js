import Book from './Book';
function BookList(props){
    const { bookList ,setBook}=props;
    return(<>
    {bookList.map(b => <Book name={b.name} code={b.code} price={b.price} discount={b.discount} quantity={b.quantity} author={b.author} Category={b.Category} rating={b.rating} setBook={setBook}></Book>)}
    </>);
}

export default BookList;