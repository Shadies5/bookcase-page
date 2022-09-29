import BookList from '../components/BookList';
import "../pages/Home.css";

const HomePage = (props) => {
    const { books, addBook } = props;
    return (
        <>
            <h2 className= "main">Welcome to the Bookcase App</h2>
            <BookList books={books} addBook={addBook}></BookList>
        </>
    );
}

export default HomePage;