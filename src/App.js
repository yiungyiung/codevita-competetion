import logo from './logo.svg';
import './App.css';
import {Box} from '@mui/material';
function App() {
  return (
    <Box className="text-3xl font-bold italic underline"
    height="100vh"
    width="100vw"
      sx={{
        minHeight: "100vh",
        overflowY: "auto",
        scrollBehavior: "smooth",
        position: "relative",
        display:"flex",
        flexDirection: "column",

      }}
    >
      hello, world
    </Box>
  );
}

export default App;
