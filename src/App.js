import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/global/Dashboard";
import Sidebar from "./scenes/global/Sidebar";
// import Team from "./scenes/global/Team";
// import Invoices from "./scenes/global/Invoices";
// import Contacts from "./scenes/global/Contacts";
// import Bar from "./scenes/global/Bar";
// import Form from "./scenes/global/Form";
// import Line from "./scenes/global/Line";
// import Pie from "./scenes/global/Pie";
// import FAQ from "./scenes/global/FAQ";
// import Geography from "./scenes/global/geography";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>  
      <div className="app">
        <Sidebar/>
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            {/* <Route path="team" element={<Team/>}/> */}
            {/* <Route path="/invoices" element={<Invoices/>}/> */}
            {/* <Route path="/contacts" element={<Contacts/>}/> */}
            {/* <Route path="/form" element={<Form/>}/> */}
            {/* <Route path="/bar" element={<Bar/>}/> */}
            {/* <Route path="/line" element={<Line/>}/> */}
            {/* <Route path="/pie" element={<Pie/>}/> */}
            {/* <Route path="/faq" element={<FAQ/>}/> */}
            {/* <Route path="/geography" element={<Geography/>}/> */}
          </Routes>
          </main>  
        </div>;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
