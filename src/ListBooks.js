import React, {Component} from 'react'
import Route from 'react-router-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SelectShelf from './SelectShelf'

class ListBooks extends Component {
  render() {
    console.log(this.props.books)

    // state = {
    //   shelf: ''
    // }

    let showingBooks = this.props.books

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>



            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {showingBooks.map((book) => (
                    <li key={book.id}>
                      {book.shelf === 'currentlyReading' &&
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <SelectShelf />
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.map((book) => (`${book}, `) ) }</div>
                        </div>
                        }
                    </li>
                  ))}
                </ol>
              </div>
            </div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {showingBooks.map((book) => (
                    <li key={book.id}>
                      {book.shelf === 'wantToRead' &&
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <SelectShelf />
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.map((book) => (`${book}, `) ) }</div>
                        </div>
                        }
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {showingBooks.map((book) => (
                    <li key={book.id}>
                      {book.shelf === 'read' &&
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <SelectShelf />
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.map((book) => (`${book}, `) ) }</div>
                        </div>
                        }
                    </li>
                  ))}
                </ol>
              </div>
            </div>
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
