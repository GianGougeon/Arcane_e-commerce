import "./css/style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './views/Home';

const App = () => {
    // set max zoom 100%

    return (
        <>
            <BrowserRouter>
            <div className="background-circle" />
                < Header />
                <Routes>
                    <Route path='/' element={< Home />} />
                </Routes>
                < Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
