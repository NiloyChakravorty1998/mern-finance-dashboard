import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "./scenes/dashboard";


function App() {
  const theme = useMemo(() =>
    createTheme(themeSettings), [])
  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* //padding starts from top and moves in clockwise order */}
        <Box width="100%" height="100%" padding="1rem 2rem 4rem">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/predictions" element={<div>Predictions</div>}/>
          </Routes>
        </Box>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
