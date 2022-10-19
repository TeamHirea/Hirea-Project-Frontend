import React from "react";

import "./Landing.css";

import landing1 from "../../assets/images/landing1.png";
import landing2 from "../../assets/images/landing2.png";
import landing3 from "../../assets/images/landing3.png";
import checklist from "../../assets/images/checklist.png";
import checklist2 from "../../assets/images/checklist2.png";

export default function Landing() {
  return (
    <main className="landing-page">
      <section className="section">
        <div className="left-text">
          <h1 className="text">
            Talenta terbaik negeri untuk perubahan revolusi 4.0
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <button className="description-button">Mulai Dari Sekarang</button>
        </div>
        <div className="right-text">
          <img className="landing-img" src={landing1} alt="" />
        </div>
      </section>
      <section className="section2">
        <div className="left-text2">
          <img className="landing-img2" src={landing2} alt="" />
        </div>
        <div className="right-text2">
          <h1 className="text">Kenapa harus mencari tallent di peworld</h1>
          <div className="list">
            <img className="listname" src={checklist} alt="" />
            Lorem ipsum dolor sit amet
          </div>
          <div className="list">
            <img className="listname" src={checklist} alt="" />
            Lorem ipsum dolor sit amet
          </div>
          <div className="list">
            <img className="listname" src={checklist} alt="" />
            Lorem ipsum dolor sit amet
          </div>
          <div className="list">
            <img className="listname" src={checklist} alt="" />
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </section>
      <section className="section">
        <div className="left-text">
          <h1 className="text">Skill Tallent</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div className="skill-list">
            <div className="skill-list-left">
              <div className="list2">
                <img className="listname2" src={checklist2} alt="" />
                JAVA
              </div>
              <div className="list2">
                <img className="listname2" src={checklist2} alt="" />
                Kotlin
              </div>
              <div className="list2">
                <img className="listname2" src={checklist2} alt="" />
                PHP
              </div>
              <div className="list2">
                <img className="listname2" src={checklist2} alt="" />
                javaScript
              </div>
            </div>
            <div className="skill-list-right">
              <div className="list2">
                <img className="listname2" src={checklist2} alt="" />
                Golang
              </div>
              <div className="list2">
                <img className="listname2" src={checklist2} alt="" />
                C++
              </div>
              <div className="list2">
                <img className="listname2" src={checklist2} alt="" />
                Ruby
              </div>
              <div className="list2">
                <img className="listname2" src={checklist2} alt="" />
                10+ Bahasa lainnya
              </div>
            </div>
          </div>
        </div>
        <div className="right-text">
          <img className="landing-img" src={landing3} alt="" />
        </div>
      </section>
      <section className="card-section">
        <h1 className="card-section-text">Their opinion about Hirea</h1>
        <p>--- card section here ---</p>
      </section>
      <section className="last-section">
        <div className="last-section-text">
          <h1>Lorem Ipsum Dolor Sit Amet</h1>
          <button className="last-section-button">Mulai Dari Sekarang</button>
        </div>
      </section>
    </main>
  );
}
