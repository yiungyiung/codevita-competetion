import "./App.css";
import Navbar from "./components/navbar";
import Cover from "./components/coverPage";
import About from "./components/about";
import Program from "./components/virtualIntern";
import Footer from "./components/footer";
import IpProgram from "./components/internshipProg";

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <About />
      <Program />
      <IpProgram />
      <Footer />
    </div>
  );
}

export default App;
