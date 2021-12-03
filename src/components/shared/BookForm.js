import React from 'react'
import { Link } from 'react-router-dom'

const BookForm = ({ book, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="A Wonderful Book"
      value={book.title}
      name="title"
      onChange={handleChange}
    />

    <label>Author</label>
    <input
      placeholder="John Doe"
      value={book.author}
      name="author"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default BookForm
