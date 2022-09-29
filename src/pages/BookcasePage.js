import BookList from '../components/BookList';

const BookcasePage = (props) => {
    const { books, addBook } = props;
    return (
        <>
            <h2>This is your personal Bookcase</h2>
            <BookList books={books} addBook={addBook}></BookList>
        </>
    );
}

export default BookcasePage;