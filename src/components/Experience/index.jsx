import React from "react";

import suitcase from "../../assets/images/suitcase.png";

import "./Experience.css";

export default function Experience() {
  return (
    <>
      <main className="experience">
        <div className="col-experience">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link " href="#">
                Portofolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pengalaman Kerja
              </a>
            </li>
          </ul>
          <div className="experience-description">
            <img className="img-profile" src={suitcase} alt="suitcase" />
            <div className="detail">
              <h1 className="list-experience"></h1>
              <h2 className="company-name"></h2>
              <h3 className="start_date"></h3>
              <h3 className="end_date"></h3>
              <p className="description"></p>
            </div>
          </div>
          <hr />
        </div>
      </main>
    </>
  );
}
