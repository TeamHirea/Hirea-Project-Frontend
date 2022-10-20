import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/ProfileJobseeker";
import Portofolio from "../../components/Portofolio";

import "./ProfileJobseeker.css";

export default function ProfileJobseeker() {
  return (
    <>
      <Header />
      <main className="profile-jobseeker">
        <Profile />
        <Portofolio />
      </main>
      <Footer />
    </>
  );
}
