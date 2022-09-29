import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/book.css';

const Book = ({book, ...props}) => {
  const { 
    id,
    saleInfo: {retailPrice},
    volumeInfo:{
      title,
      description,
      imageLinks: {thumbnail},
      authors
    }
  } = book;

  return (
    <div className= "book">
      <img src =  {thumbnail} alt = {title.length > 0 ? title : `Book id=${id}`} />
      <div>
        <h2 title={title}>
          {title.length > 50 ? title.substring(0, 50) + "..." : title}
        </h2>
        <p className="author">
          by {authors ? authors.join(", ") : "No Authors Listed"}
        </p>
        <p className="price">
          {retailPrice ? "£" + retailPrice.amount : "No Retail Price"}
        </p>
        <p className="description">
          {description
            ? description.substring(0, 300) + "..."
            : "No description"}
        </p>
      </div>

      <div>
        {props.stored === "library" ? (
          <button
            className="add-button"
            onClick={() => props.addToBookcase(id)}
          >
             Add
          </button>
        ) : (
          <button
            className="remove-button"
            onClick={() => props.removeFromBookcase(id)}
          >
            Remove
          </button>
        )}
      </div>
     
    </div>
    
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired
      })
    })
  })

};
Book.defaultProps = {
  volumeInfo: {description: "No description"},
  saleInfo: {retailPrice: {amount: 0} }
}
 
export default Book;