import "./App.css";
import About from "./components/about/About";
import Appointment from "./components/appointment/Appointment";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Workingday from "./components/workdays/Workingday";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Appointment />
      <Workingday />
    </div>
  );
}

export default App;
