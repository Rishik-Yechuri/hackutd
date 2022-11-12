import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Homepage from './pages/Homepage';
import History from './pages/History';
import Friends from './pages/Friends';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Homepage />} />
                <Route path="history" element={<History />} />
                <Route path="friends" element={<Friends />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
