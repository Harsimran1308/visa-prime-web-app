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
import ExpressEntry from './Program-Details/ExpressEntry';
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
import Citizenship from './Program-Details/Citizenship';
import LMIA from './Program-Details/LMIA';
import PermanentResidency from './Program-Details/PermanentResidency';
import StudyPermit from './Program-Details/StudyPermit';
import WorkPermit from './Program-Details/WorkPermit';
import VisitorVisa from './HomePrograms/VisitorVisa';
import VisitorPermit from './Program-Details/VisitorPermit';
import FamilySponsorshipPermit from './Program-Details/FamilySponsorshipPermit';
import AlbertaPNP from './Program-Details/AlbertaPNP';
import LocalRecruitment from './Staffing-Details/LocalRecruitment';
import TemporaryForeignWorker from './Staffing-Details/TemporaryForeignWorker';
import PGWPChanges from './Blog-Details/PGWPChanges';
import TFWPChanges from './Blog-Details/TFWPChanges';
import StudyPermitChanges from './Blog-Details/StudyPermitChanges';
import USVisaOCI from './Program-Details/USVisaOCI';
import October2024 from './Newsletter/October2024';
import November2024 from './Newsletter/November2024';

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
        <Route path="/express-entry" element={<ExpressEntry />} />
        <Route path="/pnp" element={<AlbertaPNP />} />
        <Route path="/lmia" element={<LMIA />} />
        <Route path="/permanent-residence" element={<PermanentResidency />} />
        <Route path="/work-permit" element={<WorkPermit />} />
        <Route path="/study-permit" element={<StudyPermit />} />
        <Route path="/visitor-visa" element={<VisitorPermit />} />
        <Route path="/citizenship" element={<Citizenship />} />
        <Route path="/family-sponsorship" element={<FamilySponsorshipPermit />} />
        <Route path="/local-recruitment" element={<LocalRecruitment />} />
        <Route path="/temporary-foriegn-worker" element={<TemporaryForeignWorker />} />
        <Route path="/us-visa-oci" element={<USVisaOCI />} />
        {/* Blogs links */}
        <Route path="/pgwp-changes" element={<PGWPChanges />} />
        <Route path="/tfwp-changes" element={<TFWPChanges />} />
        <Route path="/new-pgwp-changes" element={<StudyPermitChanges />} />
        {/* Newsletter links */}
        <Route path="/newsletter-november-2024" element={<November2024 />}/>
        <Route path="/newsletter-october-2024" element={<October2024 />}/>
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
