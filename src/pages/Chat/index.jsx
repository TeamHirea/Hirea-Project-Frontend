import React from "react";
import Header from "../../components/Header";
// import Avatar from "../../assets/images/person-1.png";
import "./index.css";
import Icon from "../../assets/images/undrawicon.png";
import Footer from "../../components/Footer";

export default function Chat() {
  return (
    <div>
      <Header />
      <div className="contchat container-fluid bg-light">
        <div className="card-deck p-2 mt-4">
          <div className="cardchat">
            <div className="upperborder1">
              <div className="text1">Chat</div>
            </div>
            <div className="card-block">
              <div className="image">
                <img src={Icon} alt="" />
              </div>
              <div className="text2">Belum ada Chat</div>
            </div>
          </div>
        </div>
        <div className="card-deck p-2 mt-4">
          <div className="cardchat">
            <div className="upperborder2"></div>
            <div className="card-block">
              <div className="text "></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
