import React, { Component } from 'react'
/*import { connect } from 'react-redux'
import { addTodo } from '.././actions/actions'

import AddTodo from '.././components/AddTodo'
import TodoList from '.././components/TodoList'*/
import Groups from './Groups.js'
class App extends Component {
   render() {
      return (
          <div>
           {this.props.children || <Groups/>}
           </div>
      )
   }
}
/*
function select(state) {
   return {
      visibleTodos: state.todos
   }
}
*/ 
//export default connect(select)(App)

export default App