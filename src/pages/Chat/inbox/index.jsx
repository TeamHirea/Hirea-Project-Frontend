import React, { useState } from "react";

import Header from "../../../components/Header";
// import Avatar from "../../assets/images/person-1.png";
import "./index.css";
import Footer from "../../../components/Footer";
import IconInbox from "../../../assets/images/user.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ChatRecruiter from "../../../components/ChatRecruiter";
// import { getMessage } from "../../../redux/action/chat";

import axiosApiIntances from "../../../utils/axios";

export default function Inbox() {
  // const [state, setstate] = useState(initialState)
  const [msgReceive, setMsgReceive] = useState("");
  const [msgSend, setMsgSend] = useState("");
  const [message, setMessage] = useState([]);
  const id = useSelector((state) => state.user.data.id);
  const form = { idJobseeker: id };
  const [data, setData] = useState([]);
  const [company, setCompany] = useState("");
  // const dispatch = useDispatch();
  useEffect(() => {
    getMessageHandler();
  }, []);

  const getMessageHandler = async () => {
    // await dispatch(getMessage(form));
    try {
      const result = await axiosApiIntances.get(
        `/api/message/history/jobseeker/${id}`,
        form.idJobseeker
      );
      const hasil = result.data.data;
      hasil.reverse();
      setData(hasil);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnChange = (e) => {
    setMsgSend(e.target.value);
  };

  const sendMsg = () => {
    setMessage((message) => [...message, msgSend]);
    setMsgSend("");
  };
  const showMsg = (data, company) => {
    setMsgReceive(data);
    setCompany(company);
    setMessage([]);
  };
  return (
    <div
      className="w-100 h-100 "
      style={{ paddingTop: "20px", backgroundColor: "#E5E5E5" }}
    >
      <Header />
      <div className="container  container-msg">
        <div
          className="desc"
          style={{ marginBottom: "40px", marginTop: "100px" }}
        >
          <div className="row ">
            <div
              className="col-2 bg-white  colom-chat"
              style={{ marginRight: "30px", marginLeft: "160px" }}
            >
              <div className="upperborder1">
                <p className="mt-2">Chat</p>
              </div>
              <div className="list-chat">
                {data.map((item, index) => (
                  <div key={index}>
                    <ChatRecruiter data={item} showMsg={showMsg} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-6 bg-white">
              <div className="upperborder1 ">
                <div className="mt-2 ">
                  <img src={IconInbox} alt="" style={{ marginRight: "10px" }} />
                  {company}
                </div>
              </div>
              <div className="chat_inbox">
                <div className="msg-receive">
                  {msgReceive ? (
                    <p
                      className="rounded p-2 mt-2 mr-5 shadow-sm text-white float-right"
                      style={{ backgroundColor: "#5E50A1" }}
                    >
                      {msgReceive}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="msg-send text-right" style={{ float: "right" }}>
                  {message
                    ? message.map((item, index) => {
                        return (
                          <p
                            key={index}
                            className=" msg-item rounded p-2 mt-2 mr-5 shadow-sm text-white float-left"
                            style={{ backgroundColor: "#5E50A1" }}
                          >
                            {item}
                          </p>
                        );
                      })
                    : ""}
                </div>
              </div>
              <div className="input-msg d-flex" style={{ marginTop: "340px" }}>
                <input
                  value={msgSend}
                  type="text"
                  className="form-control input-message"
                  placeholder="type message"
                  style={{ borderRadius: "20px" }}
                  onChange={handleOnChange}
                />
                <div
                  className="icon-send "
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "#5E50A1",
                    borderRadius: "50%",
                    width: "40px",
                    paddingTop: "5px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={sendMsg}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-send-fill text-center"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg>
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
