import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";   
import ContactUs from '../contact/index'
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

export default function App() {
  return (
    

    <div>
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
   
  );
}
