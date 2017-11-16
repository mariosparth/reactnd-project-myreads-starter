import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import SelectShelf from './SelectShelf'


import './App.css'

class BooksApp extends Component {
  state = {
     books : []
  }


  //get books on load
  componentDidMount () {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books : books })
    })
  }


  changeShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(response => {

      newBook.shelf = newShelf;
      let newBooks = this.state.books.filter( book => book.id !== newBook.id )

      newBooks.push(newBook);

      this.setState({
        books: newBooks
      });

    });
  };





  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            booksOnShelf = {this.state.books}
            onChangeShelf = {this.changeShelf}
          />

          )}
        />
        <Route exact path="/search" render={() => (
          <SearchBooks
            onChangeShelf = {this.changeShelf}
          />
          )}
        />

      </div>
    )
  }
}

export default BooksApp
