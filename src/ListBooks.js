import React, {Component} from 'react'
import Route from 'react-router-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import SelectShelf from './SelectShelf'

class ListBooks extends Component {

  state = {
    currentShelf: ''
  }

  updateShelf = (currentShelf) => {
    this.setState({currentShelf : currentShelf})
  }

  render() {

    //

    let showingBooks = this.props.booksOnShelf

    // let currentlyReading = showingBooks.filter((book) => book.shelf === 'currentlyReading')
    let wantToRead = showingBooks.filter((book) => book.shelf === 'wantToRead')
    let read = showingBooks.filter((book) => book.shelf === 'read')
    //


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
            />
            <BookShelf
              key="wantToRead"
              books={showingBooks.filter((book) => book.shelf === 'wantToRead')}
              shelfTitle="Want to Read"
            />
            <BookShelf
              key="read"
              books={showingBooks.filter((book) => book.shelf === 'read')}
              shelfTitle="Read"
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
