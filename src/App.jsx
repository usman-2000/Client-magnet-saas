import "./App.css";
import BusinessStrategy from "./components/BusinessStrategy";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar.jsx";
// import RateCard from "./components/RateCard";
import RateCardComponents from "./components/RateCardComponents";
import ReviewComponent from "./components/ReviewComponent";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <RateCardComponents />
      <BusinessStrategy />
      <ReviewComponent />
      <Services />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
