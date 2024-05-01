import useCounter from 'components/use-counter';

export default function CustomHook() {
  const {count, increment, decrement, reset} = useCounter();
  return (
    <article>
      <h2>useContext</h2>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
      <br />
      <button onClick={decrement}>decrement</button>
      <br />
      <button onClick={reset}>reset</button>
    </article>
  );
}
