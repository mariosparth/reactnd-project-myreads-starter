import React, {Component} from 'react'
import Route from 'react-router-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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

    let showingBooks = this.props.books

    let currentlyReading = showingBooks.filter((book) => book.shelf === 'currentlyReading')
    let wantToRead = showingBooks.filter((book) => book.shelf === 'wantToRead')
    let read = showingBooks.filter((book) => book.shelf === 'read')


    if(this.state.currentShelf) {
      
    }

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
                  {currentlyReading.map((book) => (

                    <li key={book.id}>
                      <button onClick={() => this.props.onUpdateShelf(book)}>UpdateState</button>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={this.state.currentShelf} onChange={(event) => this.updateShelf(event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.map((book) => (`${book}, `) ) }</div>
                        </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>


            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToRead.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.map((book) => (`${book}, `) ) }</div>
                        </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map((book) => (
                    <li key={book.id}>
                        <button onClick={() => this.props.onUpdateShelf(book)}>UpdateState</button>
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
