import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/Aboutme';
import Portfolio from '../../pages/Portfolio';
import Contact from '../../pages/Contact';

function Index() {
    return (
        <Routes>
            <Route path="/" exact="true" element={<Home />} />
            <Route path="/aboutme" exact="true" element={<About />} />
            <Route path="/portfolio" exact="true" element={<Portfolio />} />
            <Route path="/contact" exact="true" element={<Contact />} />
        </Routes>
    );
};

export default Index;