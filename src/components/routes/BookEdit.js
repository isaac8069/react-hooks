import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import BookForm from '../shared/BookForm'
import Layout from '../shared/Layout'

class BookEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      book: {
        title: '',
        author: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data.book }))
      .catch(console.error)
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
      url: `${apiUrl}/books/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { book: this.state.book }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { book, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/books/${this.props.match.params.id}`} />
    }

    return (
      <Layout>
        <BookForm
          book={book}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/books/${this.props.match.params.id}`}
        />
      </Layout>
    )
  }
}

export default BookEdit
