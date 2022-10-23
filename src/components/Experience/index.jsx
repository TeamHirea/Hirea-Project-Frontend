import React from "react";
import { useNavigate } from "react-router-dom";

import suitcase from "../../assets/images/suitcase.png";

import "./Experience.css";

export default function Experience(props) {
  const navigate = useNavigate();
  const { data: experience } = props;

  const handleExperience = (id) => {
    navigate(`/jobseeker/portofolio/${id}`);
  };
  return (
    <>
      <main className="experience">
        <div className="col-experience">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className="nav-link" onClick={handleExperience}>
                Portofolio
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pengalaman Kerja
              </a>
            </li>
          </ul>
          {experience ? (
            experience.map((item, index) => {
              return (
                <div className="experience-description" key={index}>
                  <img className="img-profile" src={suitcase} alt="suitcase" />
                  <div className="detail">
                    <h1 className="list-experience">{item.title}</h1>
                    <h2 className="company-name">{item.company}</h2>
                    <h3 className="start_date">{item.start_date}</h3>
                    <h3 className="end_date">{item.end_date}</h3>
                    <p className="description">{item.detail}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <main className="experience">
              <div className="col-experience">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleExperience}>
                      Portofolio
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link active">
                      Pengalaman Kerja
                    </button>
                  </li>
                </ul>
                <div className="experience-description">
                  <img className="img-profile" src={suitcase} alt="suitcase" />
                  <div className="detail">
                    <h1 className="list-experience">Data Not Found</h1>
                  </div>
                </div>
                <hr />
              </div>
            </main>
          )}
          <hr />
        </div>
      </main>
    </>
  );
}
