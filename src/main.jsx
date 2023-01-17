import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./molecules/Navigation/Navigation";
import "./index.css";
import MovieSlider from "./molecules/MovieSlider/MovieSlider";
import Footer from "./molecules/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-[100vh] bg-zinc-900 flex flex-col">
      <Navigation />
      <MovieSlider />
      <Footer />
    </div>
  </React.StrictMode>
);
