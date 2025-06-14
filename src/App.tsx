import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./sections/Contact/Contact";
import Gym from "./sections/Gym/Gym";
import Hero from "./sections/Hero/Hero";
// import Features from "./sections/Features/Features";
import Benefits from "./sections/Benefits/Benefits";
import { createContext, useState } from "react";
import { NavLinks } from "./linksEnum";

interface CurrentPageContextType {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export const CurrentPageContext = createContext<CurrentPageContextType | null>(
  null
);

function App() {
  const [currentPage, setCurrentPage] = useState<string>(NavLinks.Home);
  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      <Header />
      <Hero />
      <Benefits />
      <Gym />
      <Contact />
      <Footer />
    </CurrentPageContext.Provider>
  );
}

export default App;
