import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import BookForm from '../shared/BookForm'
import Layout from '../shared/Layout'

class BookCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      book: {
        title: '',
        author: ''
      },
      createdBookId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedBook = Object.assign({}, prevState.book, updatedField)

      return { book: editedBook }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/books`,
      method: 'POST',
      data: { book: this.state.book }
    })
      .then(res => this.setState({ createdBookId: res.data.book._id }))
      .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { createdBookId, book } = this.state

    if (createdBookId) {
      return <Redirect to={`/books/${createdBookId}`} />
    }

    return (
      <Layout>
        <BookForm
          book={book}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
      </Layout>
    )
  }
}

export default BookCreate
