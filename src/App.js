import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import Books from './components/routes/Books'
import Book from './components/routes/Book'
import BookEdit from './components/routes/BookEdit'
import BookCreate from './components/routes/BookCreate'
import Home from './components/routes/Home'
import Counter from './components/routes/Counter'

const App = props => (
  <React.Fragment>
    <h3>{props.location.state ? props.location.state.msg : null}</h3>
    <Route exact path='/' component={Home} />
    <Route exact path='/books' component={Books} />
    <Route exact path='/create-book' component={BookCreate} />
    <Route exact path='/books/:id' component={Book} />
    <Route exact path='/books/:id/edit' component={BookEdit} />
    <Route exact path='/counter' component={Counter} />
  </React.Fragment>
)

export default withRouter(App)
