import "./styles/App.css";
import Footer from "./modules/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Drinks from "./pages/Drinks";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/drinks" element={<Drinks />}></Route>
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
