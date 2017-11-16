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
    }

  }

  searchBooks = (query, maxResults) => {
    BooksAPI.search(query,maxResults).then( (books) => {
      console.log(books)
      this.setState({
        books: books
      })
    })
  }

  render() {

    const query = this.state.query
    const resultBooks = this.state.books

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



            <BookShelf
              /*
                book author is empty sometimes, returns error
                TODO to be fixed
              */

              key="currently"
              books={resultBooks}
              shelfTitle="Currently Reading"
              //onChangeShelf={this.changeShelf}
            />

      </div>
    )
  }
}

export default SearchBooks
