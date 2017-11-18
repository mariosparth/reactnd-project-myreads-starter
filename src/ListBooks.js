import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {

  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {}

  render() {


    const { booksOnShelf, onChangeShelf} = this.props

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>


        </div>

        <div className="list-books-content">
          <div>

            <BookShelf
              key="currently"
              books={booksOnShelf.filter((book) => book.shelf === 'currentlyReading')}
              shelfTitle="Currently Reading"
              onChangeShelf={onChangeShelf}
            />
            <BookShelf
              key="wantToRead"
              books={booksOnShelf.filter((book) => book.shelf === 'wantToRead')}
              shelfTitle="Want to Read"
              onChangeShelf={onChangeShelf}
            />
            <BookShelf
              key="read"
              books={booksOnShelf.filter((book) => book.shelf === 'read')}
              shelfTitle="Read"
              onChangeShelf={onChangeShelf}
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
