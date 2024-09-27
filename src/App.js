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
import ExpressEntry from './Program-Details/ExpressEntry/ExpressEntry';
import News from './News';
import FederalSkilledTradesProgram from './Program-Details/ExpressEntry/FederalSkilledTradesProgram';
import FederalSkilledWorker from './Program-Details/ExpressEntry/FederalSkilledWorker';
import ITA from './Program-Details/ExpressEntry/ITA';
import ProofOfFunds from './Program-Details/ExpressEntry/ProofOfFunds';
import CEC from './Program-Details/ExpressEntry/CEC';
import CRS from './Program-Details/ExpressEntry/CRS';
import ExpressEntryDraw from './Program-Details/ExpressEntry/ExpressEntryDraw';
import Eapr from './Program-Details/ExpressEntry/Eapr';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <Router>
      <NotificationContainer/>
      <TopInfo/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/immigration-services" element={<ImmigrationServices />} />
        <Route path="/staffing-solutions" element={<StaffingServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/latest-news" element={<News />} />
        <Route path="/immigration-details" element={<ImmigrationDetails />} />
        <Route path="/express-entry" element={<ExpressEntry />} />
        <Route path="/federal-skill-trades-program" element={<FederalSkilledTradesProgram />} />
        <Route path="/federal-skilled-worker" element={<FederalSkilledWorker/>} />
        <Route path="/invitation-to-apply" element={<ITA />} />
        <Route path="/proof-of-funds" element={<ProofOfFunds />} />
        <Route path="/canadian-experience-class" element={<CEC />} />
        <Route path="/comprehensive-ranking-system" element={<CRS />} />
        <Route path="/express-entry-draws" element={<ExpressEntryDraw />} />
        <Route path="/eapr" element={<Eapr/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
