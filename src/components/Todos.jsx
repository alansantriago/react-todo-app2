import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const Todos = () => {
  const { todos, toggleCompleted, deleteTodo } = useContext(TodoContext);

  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
};

export default Todos;
