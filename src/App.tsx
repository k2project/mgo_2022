import { Paths } from 'config/routes';
import Home from 'pages/Home';
import Press from 'pages/Press';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={Paths.HOME} element={<Home />} />
                <Route path={Paths.PRESS} element={<Press />} />
            </Routes>
        </Router>
    );
}

export default App;
