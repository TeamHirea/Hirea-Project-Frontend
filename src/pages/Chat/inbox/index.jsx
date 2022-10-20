import React from "react";
import Header from "../../../components/Header";
// import Avatar from "../../assets/images/person-1.png";
import "./index.css";
import Footer from "../../../components/Footer";
import IconInbox from "../../../assets/images/user.png";

export default function Inbox() {
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
              <div className="icon_inbox1 d-flex gap-3">
                <div className="friend-drawer">
                  <div className="img">
                    <img
                      className="profile-image"
                      src={IconInbox}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </div>
                  <div className="text3 mt-3">
                    <h6>Jonas Adam</h6>
                    <p className="text-muted">Hey, youre arrested!</p>
                  </div>
                  <span className="time text-muted small mt-3">13:21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-deck p-2 mt-4">
          <div className="cardchat">
            <div className="upperborder2">
              <div className="icon_inbox d-flex gap-3 mt-2">
                <img src={IconInbox} alt="" />
                Jonas Adam
              </div>
            </div>
            <div className="bottomborder">
              <div className="row">
                <div className="col-12">
                  <div className="chat-box-tray">
                    <input
                      type="text"
                      placeholder="Type your message here..."
                    />
                    <i className="material-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-send"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
