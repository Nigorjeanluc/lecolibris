import { BrowserRouter as Router } from "react-router-dom";
import { Container } from 'react-bootstrap';
import AnimatedRoutes from "./Components/AnimatedRoutes";
import TopNavbar from "./Components/TopNavbar";
import Footer from "./Components/Footer";

import './Styles/App/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Container fluid>
        <TopNavbar />
        {/* <Navbar /> */}
        <AnimatedRoutes />
        <Footer />
      </Container>
      </div>
    </Router>
  );
}

export default App;
