import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProfileJobseeker } from "../../redux/action/user";

function profile() {
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getProfileJobseeker(id));
  }, []);
  return (
    <div className="profile_main-container">
      <div className="profile_container">
        <div className="profile_image-container">
          <img
            src={
              userData.image
                ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/Hirea%20App/${userData.image}`
                : require("../../assets/images/profile-empty.jpg")
            }
            alt="profile"
            className="profile_profile-image"
          />
          <div className="profile_edit-button">
            <img
              src={require("../../assets/images/edit.png")}
              alt="logo edit"
            />
            Edit
          </div>
        </div>
        <div className="profile_name">{userData.name ? userData.name : ""}</div>
        <div className="profile_job">{userData.job ? userData.job : ""}</div>
        <div className="profile_text">
          {userData.job_type ? userData.job_type : ""}
        </div>
        <div className="profile_text">
          <img
            src={require("../../assets/images/map-pin.png")}
            alt="map logo"
          />
          {userData.location ? userData.location : "Indonesia"}
        </div>
        <div className="profile_text">
          <img
            src={require("../../assets/images/phone.png")}
            alt="phone logo"
          />
          {userData.phone ? `0${userData.phone}` : ""}
        </div>
        <div className="profile_text">
          {userData.description ? userData.description : ""}
        </div>
      </div>
      <div className="profile_purple-button">Ubah Password</div>
      <div className="profile_white-button">Kembali</div>
    </div>
  );
}

export default profile;
