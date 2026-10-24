import Book from './Book';
function BookList(props){
    const { bookList }=props;
    return(<>
    {bookList.map(b => <Book name={b.name} code={b.code} price={b.price} discount={b.discount} quantity={b.quantity} author={b.author} Category={b.Category} ></Book>)}
    </>);
}

export default BookList;