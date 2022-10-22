import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "./profile";
import Personal from "./personal";
// import Skill from "./skill";
// import Experience from "./experience";
// import Portfolio from "./portfolio";

import "./index.css";

export default function ProfileJobseekerPortofolio() {
  return (
    <>
      <Header />
      <main className="edit-profile_main">
        <Profile />
        <div className="edit-profile_sections">
          <Personal />
          {/* <Skill />
          <Experience />
          <Portfolio /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
