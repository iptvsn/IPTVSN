import React from "react";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Channels from "./components/Channels";
import LatestSeries from "./components/LatestSeries";
import LatestMovies from "./components/LatestMovies";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Payments from "./components/Payments";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Firs Section Cover */}
      <Cover />
      {/* Latest Movies */}
      <Channels />

      <LatestMovies />

      <LatestSeries />

      <Features />

      <Pricing />

      <Payments />

      <Faq />

      <ContactUs />

      <Footer />
    </div>
  );
}

export default App;
