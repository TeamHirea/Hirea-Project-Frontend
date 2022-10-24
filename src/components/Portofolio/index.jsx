import React from "react";

import "./Portofolio.css";

export default function Portofolio(props) {
  const { data: portofolio, handleActivePage } = props;
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
            {portofolio ? (
              portofolio.map((item, index) => {
                return (
                  <div className="portofolio-description" key={index}>
                    <img
                      className="img-portofolio"
                      src={
                        props.data.image
                          ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/Hirea%20App/${props.data.image}`
                          : require("../../assets/images/profile-empty.jpg")
                      }
                      alt="portofolio"
                    />
                    <h1 className="name-of-content">{item.title}</h1>
                  </div>
                );
              })
            ) : (
              <div>Data Not Found</div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
