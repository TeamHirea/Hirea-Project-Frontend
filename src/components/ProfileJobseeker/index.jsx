import React from "react";

// import profile from "../../assets/images/profile.png";
import mapPin from "../../assets/images/map-pin.png";
import phone from "../../assets/images/phone.png";
import mail from "../../assets/images/mail.png";
import instagram from "../../assets/images/instagram.png";
import github from "../../assets/images/github.png";
import gitlab from "../../assets/images/gitlab.png";

import "./profileJobseeker.css";
import { useNavigate } from "react-router-dom";

export default function CardProfileJobseeker(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/recruiter/hire/${props.data.id}`);
  };

  const { data } = props;
  console.log(data);
  return (
    <>
      <main className="profile-seeker">
        <div className="col-profile-seeker">
          <div className="img-jobseeker">
            <img
              className="img-profile-jobseeker rounded-circle"
              src={
                props.data.image
                  ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/${props.data.image}`
                  : require("../../assets/images/profile-empty.jpg")
              }
              alt="profile image"
            />
          </div>
          <h1 className="name">{props.data.name}</h1>
          <p className="description">{props.data.job}</p>
          <p className="description">{props.data.job_type}</p>
          <div className="location">
            <img src={mapPin} alt="mapPin" />
            <p className="description">{props.data.location}</p>
          </div>
          <div className="location">
            <img src={phone} alt="phone" />
            <p className="description">{props.data.phone}</p>
          </div>
          <p className="description">{props.data.description}</p>
          <button className="hire-button" onClick={handleDetail}>
            Hire
          </button>
          <h1 className="name">Skill</h1>
          <div className="list-skill">
            {props.data.skills_backup
              ? props.data.skills_backup.map((items, index) => {
                  return (
                    <div key={index}>
                      <button className="button-skill">{items}</button>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="social-media">
            <div className="social-media-input">
              <img className="social-media-img" src={mail} alt="mail" />
              <p className="description">{props.data.email}</p>
            </div>
            <div className="social-media-input">
              <img
                className="social-media-img"
                src={instagram}
                alt="instagram"
              />
              <p className="description">{props.data.instagram}</p>
            </div>
            <div className="social-media-input">
              <img className="social-media-img" src={github} alt="github" />
              <p className="description">{props.data.github}</p>
            </div>
            <div className="social-media-input">
              <img className="social-media-img" src={gitlab} alt="gitlab" />
              <p className="description">{props.data.gitlab}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
