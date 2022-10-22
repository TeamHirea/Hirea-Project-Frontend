import React from "react";
import { useNavigate } from "react-router-dom";

import suitcase from "../../assets/images/suitcase.png";

import "./Experience.css";

export default function Experience(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/jobseeker/portofolio/${props.data.id}`);
  };

  console.log(props.data.id);
  return (
    <>
      <main className="experience">
        <div className="col-experience">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className="nav-link" onClick={handleDetail}>
                Portofolio
              </button>
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
              <h1 className="list-experience">{props.data.title}</h1>
              <h2 className="company-name">{props.data.company}</h2>
              <h3 className="start_date">{props.data.start_date}</h3>
              <h3 className="end_date">{props.data.end_date}</h3>
              <p className="description">{props.data.detail}</p>
            </div>
          </div>
          <hr />
        </div>
      </main>
    </>
  );
}
