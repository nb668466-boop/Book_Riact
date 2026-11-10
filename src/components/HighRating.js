import Book from './Book';
function HighRating(props) {

    const { book ,Delete} = props;
    if (book.length >= 3) {
        let arrmax = [book[0].rating, book[1].rating, book[2].rating];
        let imax = [book[0].name, book[1].name, book[2].name];




        for (let j = 3; j < book.length; j++) {
            for (let i = 0; i < 3; i++) {
                if (book[j].rating > arrmax[i]) {
                    arrmax[i] = book[j].rating;
                    imax[i] = book[j].name;
                    break;
                }

            }
        }



        return (
            <div className="HighRating">
                <div className="shine"></div>
                <h1>The Highest-Rated Books</h1>

                <div className="list">
                    {imax.map((name, index) => (
                        <p key={index}> <span className="book-name">name book: {name}</span>
                            <span className="book-rating">rating: {arrmax[index]}</span>
                        </p>

                    ))}
                </div>
            </div>)
    };
}
export default HighRating;