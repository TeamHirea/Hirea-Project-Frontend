import React from "react";
import { useNavigate } from "react-router-dom";

import "./Jobseeker.css";
import mapPin from "../../assets/images/map-pin.png";

function Jobseeker(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/jobseeker/${props.data.id}`);
  };

  return (
    <>
      <main className="jobseeker">
        <div className="row-card">
          <img
            className="profile-image-jobseeker rounded-circle"
            src={
              props.data.image
                ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/${props.data.image}`
                : require("../../assets/images/profile-empty.jpg")
            }
            alt="profile image"
          />
          <div className="description-column">
            <h2 className="card-name">{props.data.name}</h2>
            <p className="card-description">{props.data.job}</p>
            <p className="card-description">{props.data.job_type}</p>
            <div className="location">
              <img src={mapPin} alt="" />
              <p className="card-location">{props.data.location}</p>
            </div>
            <div className="skill-list">
              {props.data.skill
                ? props.data.skill.map((items, index) => {
                    return (
                      <div key={index}>
                        <button className="button-skill-jobseeker">
                          {items}
                        </button>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          <button className="button-check-profile" onClick={handleDetail}>
            Lihat Profile
          </button>
        </div>
        <hr />
      </main>
    </>
  );
}

export default Jobseeker;
