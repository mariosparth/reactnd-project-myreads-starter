import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import SelectShelf from './SelectShelf'


import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

     books : []
  }

  componentDidMount () {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books : books })
    })
  }

  updateShelf(book, shelf) {
//   const id = book.id
//    const shelf = 'currentlyReading'
//    BooksAPI.update(book, shelf).then(console.log(book))
    BooksAPI.update(book, shelf).then( book => {
      this.setState(state => ({
        books: state.books.concat([book])
      }))
    })
  }

  // creatContact(contact) {
  //   ContactAPI.create(contact).then( contact => {
  //     this.setState(state => ({
  //       contacts: state.contacts.concat([ contact ])
  //     }))
  //   })
  // }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            booksOnShelf={this.state.books}
          />

          )}
        />
        <Route exact path="/search" render={() => (
          <SearchBooks />
          )}
        />

      </div>
    )
  }
}

export default BooksApp
