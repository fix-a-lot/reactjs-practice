import {
  useState,
  useEffect
} from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = event => setToDo(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos(prev => [...prev, toDo]);
    setToDo('');
  }
  return (
    <div>
      <h1>My To Do List: {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" autoFocus placeholder="Write your to do..." 
            value={toDo} onChange={onChange}
        />
        <button type="submit">Add To Do</button>
      </form>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
