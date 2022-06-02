import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./Components/Home";
import TermsNConditions from './Components/TermsAndConditions';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ContactUs from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/tnc" element={<TermsNConditions />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
      </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
