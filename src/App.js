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
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import September2024 from './Newsletter/September2024';
import August2024 from './Newsletter/August2024';
import July2024 from './Newsletter/July2024';
import June2024 from './Newsletter/June2024';
import April2024 from './Newsletter/April2024';
import March2024 from './Newsletter/March2024';
import November2023 from './Newsletter/November2023';
import October2023 from './Newsletter/October2023';
import September2023 from './Newsletter/September2023';
import July2023 from './Newsletter/July2023';
import UnderDevelopment from './UnderDevelopment';

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
        <Route path="/newsletter-september-2024" element={<September2024 />}/>
        <Route path="/newsletter-august-2024" element={<August2024 />} />
        <Route path="/newsletter-july-2024" element={<July2024 />} />
        <Route path="/newsletter-june-2024" element={<June2024 />} />
        <Route path="/newsletter-april-2024" element={<April2024 />} />
        <Route path="/newsletter-march-2024" element={<March2024 />} />
        <Route path="/newsletter-november-2023" element={<November2023 />} />
        <Route path="/newsletter-october-2023" element={<October2023 />} />
        <Route path="/newsletter-september-2023" element={<September2023 />} />
        <Route path="/newsletter-july-2023" element={<July2023 />} />
        <Route path="/pnp" element={<UnderDevelopment />} />
        <Route path="/lmia" element={<UnderDevelopment />} />
        <Route path="/permanent-residence" element={<UnderDevelopment />} />
        <Route path="/work-permit" element={<UnderDevelopment />} />
        <Route path="/study-permit" element={<UnderDevelopment />} />
        <Route path="/visitor-visa" element={<UnderDevelopment />} />
        <Route path="/citizenship" element={<UnderDevelopment />} />
        <Route path="/family-sponsorship" element={<UnderDevelopment />} />
        <Route path="/admin-clerk" element={<UnderDevelopment />} />
        <Route path="/food-service-cooks" element={<UnderDevelopment />} />
        <Route path="/general-labour" element={<UnderDevelopment />} />
        <Route path="/dental-pharmacy-assistants" element={<UnderDevelopment />} />
        <Route path="/warehouse-operations" element={<UnderDevelopment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
