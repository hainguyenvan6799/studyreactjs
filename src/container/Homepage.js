import React from "react";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import ToDo from "../components/ToDo";

function HomePage() {
  return (
    <div>
      <Header />
      <ToDo />
      <Footer />
    </div>
  );
}

export default HomePage;
