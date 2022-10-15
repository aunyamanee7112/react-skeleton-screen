import './App.css';
import Article from './components/article/article';
import User from './components/user/user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Skeleton</h1>
      </header>
      <div className='App-body'>
        <Article />
        <User />
      </div>
    </div>
  );
}

export default App;
