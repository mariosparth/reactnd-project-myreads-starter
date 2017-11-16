import React, {Component} from 'react'
import Route from 'react-router-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import SelectShelf from './SelectShelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {

  state = {

  }

  changeShelf = (book, shelf) => {
    let newBooks = this.props.booksOnShelf;
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(response => {
      this.setState({
        books: newBooks
      });
    });
  };


  render() {

    let showingBooks = this.props.booksOnShelf


    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>


        </div>

        <div className="list-books-content">
          <div>

            <BookShelf
              key="currently"
              books={showingBooks.filter((book) => book.shelf === 'currentlyReading')}
              shelfTitle="Currently Reading"
              onChangeShelf={this.changeShelf}
            />
            <BookShelf
              key="wantToRead"
              books={showingBooks.filter((book) => book.shelf === 'wantToRead')}
              shelfTitle="Want to Read"
              onChangeShelf={this.changeShelf}
            />
            <BookShelf
              key="read"
              books={showingBooks.filter((book) => book.shelf === 'read')}
              shelfTitle="Read"
              onChangeShelf={this.changeShelf}
            />
          </div>

        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>

    )
  }
}

export default ListBooks
