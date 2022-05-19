import { Provider } from 'react-redux';
import store from './store';
import { ListProvider } from "./contexts/list";
import ReduxList from './components/ReduxList';
import ReduxCounter from './components/ReduxCounter';
import ContextList from './components/ContextList';
import './App.css';

function App() {
  return (
    <Provider store={store} >
      <ListProvider>
        <div className="App">
          <ReduxList />
          <ReduxCounter />
          <ContextList />
        </div>
      </ListProvider>
    </Provider>
  );
}

export default App;
