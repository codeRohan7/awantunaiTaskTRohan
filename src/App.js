import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector , useDispatch}from 'react-redux'
import {getTaskAction} from './redux/actions/TaskAction'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getTaskAction())
  }, [])

  const reducerState = useSelector((state) => state.demoReducer)
  console.log(reducerState);
  
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
