import Book from './Book';
function BookList(props) {
    const { bookList, setBook ,Delete} = props;
    return (<>
        {bookList.map((b, ind) => (<Book
            key={b.code}
            name={b.name}
            code={b.code}
            price={b.price}
            discount={b.discount}
            quantity={b.quantity}
            author={b.author}
            Category={b.Category}
            rating={b.rating}
            setBook={setBook}
            Delete={Delete}
             />
        ))}
    </>
    );

}

export default BookList;