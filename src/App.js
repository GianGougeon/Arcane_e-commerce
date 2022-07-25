import "./css/style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './views/Home';

const App = () => {
    return (
        <>
            <BrowserRouter>
            <div className="background-circle" />
                < Header />
                <Routes>
                    <Route path='/' element={< Home />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
