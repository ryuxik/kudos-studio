import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';

enum KudosMainRoutes {
    Home = '/',
    About = '/about',
    Index = '/index',
    Brand = '/brand',
    Motion = '/motion',
    Product = '/product',
    Ai = '/ai',
}

enum KudosProjectRoutes {

}

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={KudosMainRoutes.Home} element={<Home />} />
                <Route path={KudosMainRoutes.About} element={<About />} />
                <Route path={KudosMainRoutes.Index} />
                <Route path={KudosMainRoutes.Brand} />
                <Route path={KudosMainRoutes.Motion} />
                <Route path={KudosMainRoutes.Product} />
                <Route path={KudosMainRoutes.Ai} />
            </Routes>
        </BrowserRouter>
    );
}

export { AppRouter, KudosMainRoutes };