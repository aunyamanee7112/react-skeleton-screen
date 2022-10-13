import './App.css';
import Article from './components/article';
import User from './components/user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Skeleton</h1>
      </header>
      <body className='App-body'>
        <Article />
        <User />
      </body>
    </div>
  );
}

export default App;
