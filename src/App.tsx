import Home from 'pages/Home';
import Press from 'pages/Press';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router
        // basename={'/g4g-debate'}
        >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/press' element={<Press />} />
            </Routes>
        </Router>
    );
}

export default App;
