import "./App.css";
import Navbar from "./components/navbar";
import Cover from "./components/coverPage";
import About from "./components/about";
import Program from "./components/virtualIntern";
import Footer from "./components/footer";
import CustomizedSwitches from "./components/CustomizedSwitches";

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <About />
      <Program />
      <CustomizedSwitches />
      <IpProgram />
      <Footer />
    </div>
  );
}

export default App;
