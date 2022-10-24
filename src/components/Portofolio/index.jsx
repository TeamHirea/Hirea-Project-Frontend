import React from "react";

import portofolio from "../../assets/images/portofolio.png";

import "./Portofolio.css";

export default function Portofolio(props) {
  const { handleActivePage } = props;
  return (
    <>
      <main className="portofolio">
        <div className="col-portofolio">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Portofolio
              </a>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  handleActivePage("experience");
                }}
              >
                Pengalaman Kerja
              </div>
            </li>
          </ul>
          <div className="portofolio-description">
            <div className="detail-portofolio">
              <img
                className="img-portofolio"
                src={portofolio}
                alt="portofolio"
              />
              <h1 className="name-of-content">Remainder app</h1>
            </div>
            <div className="detail-portofolio">
              <img
                className="img-portofolio"
                src={portofolio}
                alt="portofolio"
              />
              <h1 className="name-of-content">Remainder app</h1>
            </div>
            <div className="detail-portofolio">
              <img
                className="img-portofolio"
                src={portofolio}
                alt="portofolio"
              />
              <h1 className="name-of-content">Remainder app</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
