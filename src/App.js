import "./App.css";
import Navbar from "./components/navbar";
import Cover from "./components/coverPage";
import About from "./components/about";
import Program from "./components/virtualIntern";
import Footer from "./components/footer";
import IpProgram from "./components/internshipProg";
import CustomizedSwitches from "./components/CustomizedSwitches";
import IProgram from "./components/intern+train";

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <About />
      <Program />
      <CustomizedSwitches />
      <IpProgram />
      <IProgram />
      <Footer />
    </div>
  );
}

export default App;
