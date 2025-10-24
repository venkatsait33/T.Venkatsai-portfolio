import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About,  ContactForm, Footer, Home, NavBar, Portfolio } from "./components";


function App() {
  return (
    <>
      <div className="flex flex-col items-center max-w-screen-xl p-2 m-1 mx-auto justify-evenly w-100">
        <div>
          <NavBar />
      </div>
        <div className="mt-16 "> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/contactForm" element={<ContactForm />} />
          </Routes>
       </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
