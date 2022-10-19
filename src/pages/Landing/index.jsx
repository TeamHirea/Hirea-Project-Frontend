import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";

function Landing() {
  return (
    <div>
      <Header />
      <main>
        <section className="row landing-section">
          <div className="col col-sm-12 col-md-12 col-lg-6 landing-left-container">
            <div className="landing-section-title">
              Talenta terbaik negeri untuk perubahan revolusi 4.0
            </div>
            <div className="landing-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </div>
            <div className="landing-section-button">Mulai Dari Sekarang</div>
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-6 landing-right-container">
            <img
              src={require("../../assets/images/banner-1.png")}
              alt="banner"
              className="landing_banner"
            />
          </div>
        </section>
        <section className="row landing-section">
          <div className="col col-sm-12 col-md-12 col-lg-6 landing-right-container">
            <img
              src={require("../../assets/images/banner-2.png")}
              alt="banner"
              className="landing_banner"
            />
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-6 landing-left-container">
            <div className="landing_banner-title">
              Kenapa harus mencari tallent di Hirea
            </div>
            <div className="landing_banner-check">
              <img
                src={require("../../assets/vectors/check.png")}
                alt="checklist"
              />
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="landing_banner-check">
              <img
                src={require("../../assets/vectors/check.png")}
                alt="checklist"
              />
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="landing_banner-check">
              <img
                src={require("../../assets/vectors/check.png")}
                alt="checklist"
              />
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="landing_banner-check">
              <img
                src={require("../../assets/vectors/check.png")}
                alt="checklist"
              />
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </section>
        <section className="row landing-section">
          <div className="col col-sm-12 col-md-12 col-lg-6 landing-left-container">
            <div className="landing-section-title">Skill Tallent</div>
            <div className="landing-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </div>
            <div className="landing_section-check-double">
              <div className="landing_section-check-container">
                <div className="landing_banner-check">
                  <img
                    src={require("../../assets/vectors/check-2.png")}
                    alt="checklist"
                  />
                  <div>Java</div>
                </div>
                <div className="landing_banner-check">
                  <img
                    src={require("../../assets/vectors/check-2.png")}
                    alt="checklist"
                  />
                  <div>Kotlin</div>
                </div>
                <div className="landing_banner-check">
                  <img
                    src={require("../../assets/vectors/check-2.png")}
                    alt="checklist"
                  />
                  <div>PHP</div>
                </div>
                <div className="landing_banner-check">
                  <img
                    src={require("../../assets/vectors/check-2.png")}
                    alt="checklist"
                  />
                  <div>Javascript</div>
                </div>
              </div>
              <div className="landing_section-check-container">
                <div className="landing_banner-check">
                  <img
                    src={require("../../assets/vectors/check-2.png")}
                    alt="checklist"
                  />
                  <div>Golang</div>
                </div>
                <div className="landing_banner-check">
                  <img
                    src={require("../../assets/vectors/check-2.png")}
                    alt="checklist"
                  />
                  <div>C++</div>
                </div>
                <div className="landing_banner-check">
                  <img
                    src={require("../../assets/vectors/check-2.png")}
                    alt="checklist"
                  />
                  <div>Ruby</div>
                </div>
                <div className="landing_banner-check">
                  <img
                    src={require("../../assets/vectors/check-2.png")}
                    alt="checklist"
                  />
                  <div>10+ lainnya</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-6 landing-right-container">
            <img
              src={require("../../assets/images/banner-3.png")}
              alt="banner"
              className="landing_banner"
            />
          </div>
        </section>
        <section className="landing_opinion">
          <div className="landing_opinion-title">Their opinion about Hirea</div>
          <div className="landing_opinion-box-container">
            <div className="landing_opinion-box">
              <img
                src={require("../../assets/images/person-3.png")}
                alt="profile"
                className="landing_opinion-image"
              />
              <div className="landing_opinion-name">Bill Hikmah</div>
              <div className="landing_opinion-job">Web Developer</div>
              <div className="landing_opinion-message">
                Bagus lah, kan ini apps saya.
              </div>
            </div>
            <div className="landing_opinion-box">
              <img
                src={require("../../assets/images/person-2.png")}
                alt="profile"
                className="landing_opinion-image"
              />
              <div className="landing_opinion-name">Setyawan Dwiki</div>
              <div className="landing_opinion-job">Web Developer</div>
              <div className="landing_opinion-message">Mantap!</div>
            </div>
            <div className="landing_opinion-box">
              <img
                src={require("../../assets/images/person-1.png")}
                alt="profile"
                className="landing_opinion-image"
              />
              <div className="landing_opinion-name">Bonaventura Vito</div>
              <div className="landing_opinion-job">Web Developer</div>
              <div className="landing_opinion-message">Keren beud.</div>
            </div>
          </div>
        </section>
        <section className="landing_box">
          <div className="landing_box-text">Hirea</div>
          <div className="landing_box-button">Mulai Sekarang</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
