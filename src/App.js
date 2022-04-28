import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import TopNavbar from "./Components/TopNavbar";

import './Styles/App/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        {/* <Navbar /> */}
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
