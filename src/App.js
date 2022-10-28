import "./App.css";
import About from "./components/about/About";
import Appointment from "./components/appointment/Appointment";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";
import Workingday from "./components/workdays/Workingday";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Appointment />
      <Workingday />
      <Testimonial />
      <Services />
    </div>
  );
}

export default App;
