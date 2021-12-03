import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

class Books extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/books`)
      .then(res => this.setState({ books: res.data.books }))
      .catch(console.error)
  }

  render () {
    const books = this.state.books.map(book => (
      <li key={book._id}>
        <Link to={`/books/${book._id}`}>{book.title}</Link>
      </li>
    ))

    return (
      <Layout>
        <h4>Books</h4>
        <ul>
          {books}
        </ul>
      </Layout>
    )
  }
}

export default Books
