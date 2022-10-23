import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function profile() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.user.data);
  return (
    <div className="my-profile_main-container">
      <div className="my-profile_container">
        <div className="my-profile_image-container">
          <img
            src={
              data
                ? data.image
                  ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345355/Hirea%20App/${data.image}`
                  : require("../../assets/images/person-1.png")
                : require("../../assets/images/person-1.png")
            }
            alt="my-profile"
            className="my-profile_profile-image"
          />
        </div>
        <div className="my-profile_name">{data.name}</div>
        <div className="my-profile_job">{data.job}</div>
        <div className="my-profile_text">{data.job_type}</div>
        <div className="my-profile_text">
          <img
            src={require("../../assets/images/map-pin.png")}
            alt="map logo"
          />
          {data.location}
        </div>
        <div className="my-profile_text">
          <img
            src={require("../../assets/images/phone.png")}
            alt="phone logo"
          />
          {data.phone}
        </div>
        <div className="my-profile_text">{data.description}</div>
      </div>
      <div
        className="my-profile_purple-button"
        onClick={() => {
          navigate("/profile/edit");
        }}
      >
        Edit Profile
      </div>
    </div>
  );
}

export default profile;
