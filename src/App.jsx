import Header from './components/Header';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
