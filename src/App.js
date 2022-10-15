import BusinessContextProvider from './context/BusinessContext';
import Home from './pages/Home';

function App() {
  return (
    <BusinessContextProvider>
      <Home />
    </BusinessContextProvider>
  );
}

export default App;
