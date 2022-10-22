import React from "react";
import { useNavigate } from "react-router-dom";

import "./Jobseeker.css";
import profile from "../../assets/images/profile.png";

function Jobseeker(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/ProfileJobseekerExperience/${props.data.id}`);
  };
  return (
    <>
      <main className="jobseeker">
        <div className="row-card">
          <img className="profile-image" src={profile} alt="" />
          <div className="description-column">
            <h2 className="card-name">{props.data.name}</h2>
            <p className="card-description">{props.data.phone}</p>
            <p className="card-location">{props.data.location}</p>
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
