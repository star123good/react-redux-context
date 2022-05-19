import { Provider } from 'react-redux';
import store from './store';
import ReduxList from './components/ReduxList';
import ContextList from './components/ContextList';
import './App.css';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <div>
          <ReduxList />
          <ContextList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
