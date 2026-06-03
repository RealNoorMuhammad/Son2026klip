import React, { useEffect } from "react";
import MainNavbar from "./MainNavbar";
import HeroSection from "./HeroSection";
import PriceTicker from "./PriceTicker";
import LiveBuysFeed from "./LiveBuysFeed";
import Tokenomics from "./Tokenomics";
import BannerSection from "./BannerSection";
import HowToBuy from "./HowToBuy";
import BeforeFooterSection from "./BeforeFooterSection";
import HomeFooter from "./HomeFooter";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Are ya winning, $SON?";
  }, []);

  return (
    <div className="main-home">
      <MainNavbar />
      <HeroSection />
      <PriceTicker />
      <LiveBuysFeed />
      <Tokenomics />
      <BannerSection />
      <HowToBuy />
      <PriceTicker />
      <BeforeFooterSection />
      <HomeFooter />
    </div>
  );
};

export default Home;
