import {
  useState,
  useEffect
} from 'react';

import Button from './component/Button';
import styles from './App,module.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [toDos, setTodos] = useState([]);
  const handleChange = event => setTodo(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    console.log(todo);
    if (todo === '') {
      return;
    }
    setTodo('');
    setTodos([...toDos, todo]);
  };

  // useEffect(() => {
  console.log('toDos:', toDos);
  // }, [toDos]);

  return (
    <div>
      <h1>My TO-DO List ({toDos.length})</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add todo" autoFocus
            onChange={handleChange} value={todo} />&nbsp;
        <button type="submit">Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
