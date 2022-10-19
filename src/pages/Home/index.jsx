import React from "react";
import "./Home.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import profile from "../../assets/images/profile.png";

function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <main className="home">
          <div className="home-bar">
            <h1 className="home-bar-title">Top Jobs</h1>
          </div>
          <section className="main-section">
            <div className="search-section">
              <div className="row-search">
                <input
                  className="search-text"
                  type="text"
                  placeholder="Search for any skill"
                />
                <input
                  className="category"
                  type="text"
                  placeholder="Category"
                />
                <button className="search-button">Search</button>
              </div>
            </div>
            <div className="card-profile">
              <div className="row-card">
                <img className="profile-image" src={profile} alt="" />
                <div className="description-column">
                  <h2 className="card-name">Louis tomlinson</h2>
                  <p className="card-description">Web Developer . Freelance</p>
                  <p className="card-location">Location</p>
                  <div>
                    <button className="button-skill">PHP</button>
                    <button className="button-skill">Javascript</button>
                    <button className="button-skill">HTML</button>
                  </div>
                </div>
                <button className="button-check-profile">Lihat Profile</button>
              </div>
              <hr />
              <div className="row-card">
                <img className="profile-image" src={profile} alt="" />
                <div className="description-column">
                  <h2 className="card-name">Louis tomlinson</h2>
                  <p className="card-description">Web Developer . Freelance</p>
                  <p className="card-location">Location</p>
                  <div>
                    <button className="button-skill">PHP</button>
                    <button className="button-skill">Javascript</button>
                    <button className="button-skill">HTML</button>
                  </div>
                </div>
                <button className="button-check-profile">Lihat Profile</button>
              </div>
              <hr />
              <div className="row-card">
                <img className="profile-image" src={profile} alt="" />
                <div className="description-column">
                  <h2 className="card-name">Louis tomlinson</h2>
                  <p className="card-description">Web Developer . Freelance</p>
                  <p className="card-location">Location</p>
                  <div>
                    <button className="button-skill">PHP</button>
                    <button className="button-skill">Javascript</button>
                    <button className="button-skill">HTML</button>
                  </div>
                </div>
                <button className="button-check-profile">Lihat Profile</button>
              </div>
              <hr />
              <div className="row-card">
                <img className="profile-image" src={profile} alt="" />
                <div className="description-column">
                  <h2 className="card-name">Louis tomlinson</h2>
                  <p className="card-description">Web Developer . Freelance</p>
                  <p className="card-location">Location</p>
                  <div>
                    <button className="button-skill">PHP</button>
                    <button className="button-skill">Javascript</button>
                    <button className="button-skill">HTML</button>
                  </div>
                </div>
                <button className="button-check-profile">Lihat Profile</button>
              </div>
            </div>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
