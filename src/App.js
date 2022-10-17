import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Message from './components/Main/Message';
import Main from './components/Main';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="task/:id" element={<Main />}>
            <Route path="message/:messageId" element={<Message />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
