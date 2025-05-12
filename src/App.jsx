import { Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Landing from "./pages/Landing_Page";
import Contact from "./pages/Contact";
import BookOffice from "./pages/BookOffice";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/BookOffice" element={<BookOffice />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
    </>
  );
}

export default App;
