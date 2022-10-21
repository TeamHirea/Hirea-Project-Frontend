import React from "react";

function profile() {
  return (
    <div className="profile_main-container">
      <div className="profile_container">
        <div className="profile_image-container">
          <img
            src={require("../../assets/images/person-1.png")}
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
        <div className="profile_name">Louis Tomlinson</div>
        <div className="profile_job">Web Developer</div>
        <div className="profile_text">Freelancer</div>
        <div className="profile_text">
          <img
            src={require("../../assets/images/map-pin.png")}
            alt="map logo"
          />
          Purwokerto, Jawa Tengah
        </div>
        <div className="profile_text">
          <img
            src={require("../../assets/images/phone.png")}
            alt="phone logo"
          />
          0812 - 3456 - 789
        </div>
        <div className="profile_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
          lacus fringilla, vestibulum risus at.
        </div>
      </div>
      <div className="profile_purple-button">Ubah Password</div>
      <div className="profile_white-button">Kembali</div>
    </div>
  );
}

export default profile;
