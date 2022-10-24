import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "./profile";
// import Skill from "./skill";
// import Experience from "./experience";
// import Portfolio from "./portfolio";

import "./index.css";

export default function ProfileJobseekerPortofolio() {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <main className="my-profile_main">
        <Profile />
      </main>
      <Footer />
    </>
  );
}
