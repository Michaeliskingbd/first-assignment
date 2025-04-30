import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StaffCard from "../components/StaffCard";
import LeaderCard from "../components/LeaderCard";
import Percentage from "../components/Percentage";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="flex w-50% m-auto ">
        <StaffCard
          name="mike"
          department="Human resources"
          postion="Hr"
          image="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <StaffCard
          name="John"
          department="Human resources"
          postion="Hr"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <StaffCard
          name="John"
          department="Human resources"
          postion="Hr"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className="flex">
        <LeaderCard />
      </div>

      <Percentage />
    </div>
  );
};

export default Homepage;
