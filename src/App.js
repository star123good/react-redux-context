import { Provider } from 'react-redux';
import store from './store';
import ReduxList from './components/ReduxList';
import ReduxCounter from './components/ReduxCounter';
import ContextList from './components/ContextList';
import './App.css';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <ReduxList />
        <ReduxCounter />
        <ContextList />
      </div>
    </Provider>
  );
}

export default App;
