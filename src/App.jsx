import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About,  ContactForm, Footer, Home, NavBar, Portfolio } from "./components";


function App() {
  return (
    <>
      <div className="flex flex-col items-center h-screen max-w-screen-xl p-2 m-1 mx-auto justify-evenly w-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
         
          <Route path="/contactForm" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
