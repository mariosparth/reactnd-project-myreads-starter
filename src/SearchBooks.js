import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'


class SearchBooks extends Component {

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })

    if(query){
      this.searchBooks(query, 20)
    } else {
      this.state.books = []
    }

  }

  searchBooks = (query, maxResults) => {
    BooksAPI.search(query,maxResults).then( (books) => {
      this.setState({
        books: books
      })
    })
  }

  render() {

    const {query, books} = this.state
    const {onChangeShelf, booksOnShelf} = this.props

    if(books){
      books.map(book => {
        for (let item of booksOnShelf) {
          if(book.id === item.id){
            book.shelf = item.shelf
          }
        }
      })
    }

    console.log(books);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */
            }

            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>


          { books.length > 0 && (
              <BookShelf
                key="new"
                books={books}
                shelfTitle="Results"
                onChangeShelf={ onChangeShelf }
                booksOnShelf={ booksOnShelf }
              />
            )
          }

      </div>
    )
  }
}

export default SearchBooks
