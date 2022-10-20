import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/ProfileJobseeker";
import Experience from "../../components/Experience";

import "./ProfileJobseekerExperience.css";

export default function ProfileJobseekerExperience() {
  return (
    <>
      <Header />
      <main className="profile-jobseeker">
        <Profile />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
