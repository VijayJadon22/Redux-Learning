import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement } from './redux/slices/counter';
import MyComponent from './components/MyComponent';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <MyComponent />
    </div>
  );
}

export default App;
