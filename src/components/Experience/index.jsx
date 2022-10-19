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
              <h1 className="list-experience">Engineer</h1>
              <h2 className="company-name">Tokopedia</h2>
              <h3 className="duration-of-work">
                July 2019 - January 2020 6 months
              </h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
            </div>
          </div>
          <hr />
          <div className="experience-description">
            <img className="img-profile" src={suitcase} alt="suitcase" />
            <div className="detail">
              <h1 className="list-experience">Engineer</h1>
              <h2 className="company-name">Tokopedia</h2>
              <h3 className="duration-of-work">
                July 2019 - January 2020 6 months
              </h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
            </div>
          </div>
          <hr />
          <div className="experience-description">
            <img className="img-profile" src={suitcase} alt="suitcase" />
            <div className="detail">
              <h1 className="list-experience">Engineer</h1>
              <h2 className="company-name">Tokopedia</h2>
              <h3 className="duration-of-work">
                July 2019 - January 2020 6 months
              </h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </main>
    </>
  );
}
