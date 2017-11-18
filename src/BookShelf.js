import React, {Component} from 'react'
import PropTypes from 'prop-types'
import noImage from './icons/noImage.png'

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {}

  render() {

    const {books} = this.props

    const currentShelf = 'none'

    return (<div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map((book) => (<li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks && (book.imageLinks.thumbnail || noImage)})`
                    }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event) => this.props.onChangeShelf(book, event.target.value)} defaultValue={currentShelf}>
                      <option value="disabled" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors &&
                  book.authors.map( (author, index) =>
                  (<div className="book-authors" key={index}>{author}</div>)
                )}
              </div>
            </li>))
          }
        </ol>
      </div>
    </div>)
  }
}

export default BookShelf
