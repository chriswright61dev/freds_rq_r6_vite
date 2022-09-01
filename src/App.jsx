import "./styles/App.css";
import "./styles/AppColours.css";
import "./styles/animation.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { siteSettings } from "./config/config";
// pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import EventsOld from "./pages/EventsOld";
import Event from "./pages/Event";
import Drinks from "./pages/Drinks";
import PrideLevBeerPage from "./pages/PrideLevBeerPage";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
import Settings from "./pages/Settings";
// modules
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import Navigation from "./modules/Navigation/Navigation";

const queryClient = new QueryClient();

function App() {
  const [headerReady, setHeaderReady] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header setHeaderReady={setHeaderReady} headerReady={headerReady} />
        <Routes>
          <Route path="*" element={<Home headerReady={headerReady} />}></Route>
          <Route path="/" element={<Home headerReady={headerReady} />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          {siteSettings.enableDrinksPage ? (
            <Route path="/drinks" element={<Drinks />}></Route>
          ) : null}

          <Route
            path="/prideoflevenshulme"
            element={<PrideLevBeerPage />}
          ></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/eventsold" element={<EventsOld />}></Route>
          <Route path="/events/:event_id" element={<Event />}></Route>

          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/jobs/:job_id" element={<Job />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>

        <Footer headerReady={headerReady} />
        <Navigation />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
