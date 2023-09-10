import "./App.css";
import Navbar from "./components/navbar";
import Cover from "./components/coverPage";
import About from "./components/about";
import Program from "./components/virtualIntern";
import Footer from "./components/footer";
import CustomizedSwitches from "./components/CustomizedSwitches";
import Terms from "./components/T&C";
import VideoLinks from "./components/youtube";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/term" element={<Terms />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Cover />
      <About />
      <Program />
      <CustomizedSwitches />
      <VideoLinks />
      <Footer />
    </div>
  );
}

export default App;
