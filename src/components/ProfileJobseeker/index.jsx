import React from "react";

import profile from "../../assets/images/profile.png";
import mapPin from "../../assets/images/map-pin.png";
import phone from "../../assets/images/phone.png";
import mail from "../../assets/images/mail.png";
import instagram from "../../assets/images/instagram.png";
import github from "../../assets/images/github.png";
import gitlab from "../../assets/images/gitlab.png";

import "./profileJobseeker.css";

export default function CardProfileJobseeker() {
  return (
    <>
      <main className="profile-seeker">
        <div className="col-profile-seeker">
          <div className="img">
            <img className="img-profile" src={profile} alt="profile-img" />
          </div>
          <h1 className="name">Louis Tomlinson</h1>
          <p className="description">Web Developer</p>
          <p className="description">Frelancer</p>
          <div className="location">
            <img src={mapPin} alt="mapPin" />
            <p className="description">Purwokerto, Jawa Tengah</p>
          </div>
          <div className="location">
            <img src={phone} alt="phone" />
            <p className="description">0812-3456-789</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </p>
          <button className="hire-button">Hire</button>
          <h1 className="name">Skill</h1>
          <div className="list-skill">
            <button className="button-skill">Phyton</button>
            <button className="button-skill">Laravel</button>
            <button className="button-skill">Golang</button>
            <button className="button-skill">JavaScript</button>
            <button className="button-skill">PHP</button>
            <button className="button-skill">HTML</button>
            <button className="button-skill">C++</button>
            <button className="button-skill">Kotlin</button>
            <button className="button-skill">Swift</button>
          </div>
          <div className="social-media">
            <div className="social-media-input">
              <img className="social-media-img" src={mail} alt="mail" />
              <p className="description">Louistommo@gmail.com</p>
            </div>
            <div className="social-media-input">
              <img
                className="social-media-img"
                src={instagram}
                alt="instagram"
              />
              <p className="description">@Louist91</p>
            </div>
            <div className="social-media-input">
              <img className="social-media-img" src={github} alt="github" />
              <p className="description">@Louistommo</p>
            </div>
            <div className="social-media-input">
              <img className="social-media-img" src={gitlab} alt="gitlab" />
              <p className="description">@Louistommo91</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
