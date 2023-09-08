import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/navbar";
import Cover from "./components/coverPage";
import About from "./components/about";
import Program from "./components/virtualIntern";

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <About />
      <Program />
    </div>
  );
}

export default App;
