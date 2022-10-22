import React from "react";
import { useNavigate } from "react-router-dom";

import "./Jobseeker.css";
import mapPin from "../../assets/images/map-pin.png";

function Jobseeker(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/jobseeker/experience/${props.data.id}`);
  };
  return (
    <>
      <main className="jobseeker">
        <div className="row-card">
          <img
            className="profile-image-jobseeker rounded-circle"
            src={`https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/Hirea%20App/${props.data.image}`}
            alt="profile image"
          />
          <div className="description-column">
            <h2 className="card-name">{props.data.name}</h2>
            <p className="card-description">{props.data.phone}</p>
            <div className="location">
              <img src={mapPin} alt="" />
              <p className="card-location">{props.data.location}</p>
            </div>
            <div>
              <button className="button-skill">{props.data.skill}</button>
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
