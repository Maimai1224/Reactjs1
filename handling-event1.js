import React from 'react';
import './App.css';
import classNames from 'classnames';

class TodoItem extends React.Component {
  render() {
    const { item } = this.props
    
    return (
      <div
      onClick={() => this.props.onItemClick(item)}
        className={classNames('todo-items', {
          'done': item.isDone
        })}
        >
        {item.title}
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      'name': 'a',
      count: 12,
      todoItems: [
        {
          id: 1,
          title: 'Cafe',
          isDone: true,
        },
        {
          id: 2,
          title: 'Game',
          isDone: false,
        },
        {
          id: 3,
          title: 'Cake',
          isDone: false,
        },
      ]
    }
  }
  
  onItemClick(item) {
    const _todoItemIndex = this.state.todoItems.findIndex(_item => _item.id === item.id)
    const _todoItems = this.state.todoItems
    _todoItems[_todoItemIndex].isDone = true
    // console.log(_todoItems)
    this.setState({
      // ...this.state,
      todoItems: _todoItems
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.todoItems.map((_item, index) => {
            return (
              <TodoItem onItemClick={(item) => this.onItemClick(item)} item={_item} key={index} />
            )
          })
        }
      </div>
    );
  }
}

export default App;