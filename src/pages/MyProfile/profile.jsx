import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <div className="my-profile_main-container">
      <div className="my-profile_container">
        <div className="my-profile_image-container">
          <img
            src={
              user?.data
                ? user?.data.image
                  ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/${user.data?.image}`
                  : require("../../assets/images/person-1.png")
                : require("../../assets/images/person-1.png")
            }
            alt="my-profile"
            className="my-profile_profile-image"
          />
        </div>
        <div className="text-center"></div>
        <div className="my-profile_name w-100 text-center">
          {user.data.name}
        </div>
        <div className="my-profile_job w-100 text-center">
          {user.data.job ? user.data.job : "null"}
        </div>
        <div className="my-profile_text w-100">
          {user.data.job_type ? user.data.job_type : "null"}
        </div>
        <div className="my-profile_text w-100 text-center">
          <img
            src={require("../../assets/images/map-pin.png")}
            alt="map logo"
          />
          {user.data.location ? user.data.location : "null"}
        </div>
        <div className="my-profile_text w-100">
          <img
            src={require("../../assets/images/phone.png")}
            alt="phone logo"
          />
          {user.data.phone}
        </div>
        <div className="my-profile_text text-center w-100">
          {user.data.description}
        </div>
        <div className="w-100 text-center">
          <div
            className="my-profile_purple-button"
            onClick={() => {
              navigate("/profile/edit");
            }}
          >
            Edit Profile
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
