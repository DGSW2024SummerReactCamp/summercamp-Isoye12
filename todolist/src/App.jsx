import './App.css';
import Header from './components/Header'
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList /> {/* TodoItem은 Todo List 안에 있음 */}
    </div>
  );
};

export default App;
