import "./styles/App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
const queryClient = new QueryClient();
function App() {
  getVenueData();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header setHeaderReady={setHeaderReady} headerReady={headerReady} />
        <Routes>
          <Route path="*" element={<Home headerReady={headerReady} />}></Route>
          <Route path="/" element={<Home headerReady={headerReady} />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
