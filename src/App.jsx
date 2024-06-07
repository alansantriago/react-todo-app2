import React from 'react';
import { TodoProvider } from './components/TodoContext';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <TodoProvider>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm />
        <Todos />
      </div>
    </TodoProvider>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
};

export default App;
