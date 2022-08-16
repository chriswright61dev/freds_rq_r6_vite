import "./styles/App.css";
import { getVenueData } from "./data/getData/getVenueData";
function App() {
  getVenueData();
  return <div className="App">hi there</div>;
}

export default App;
