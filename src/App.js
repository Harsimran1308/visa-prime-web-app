import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import TopInfo from './TopInfo';
import Footer from './Footer';
import ImmigrationServices from './ImmigrationServices';
import StaffingServices from './StaffingServices';
import About from './About';
import Contact from './Contact';
import Blogs from './Blogs';
import ImmigrationDetails from './Blog-Details/ImmigrationDetails';
import ExpressEntry from './Program-Details/ExpressEntry';


function App() {
  return (
    <Router>
      <TopInfo/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/immigration-services" element={<ImmigrationServices />} />
        <Route path="/staffing-solutions" element={<StaffingServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/immigration-details" element={<ImmigrationDetails />} />
        <Route path="/express-entry" element={<ExpressEntry />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
