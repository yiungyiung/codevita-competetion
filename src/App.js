import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/navbar";
import Cover from "./components/coverPage";
function App() {
  return (
    <div>
      <Navbar />
      <Cover />
    </div>
  );
}

export default App;
