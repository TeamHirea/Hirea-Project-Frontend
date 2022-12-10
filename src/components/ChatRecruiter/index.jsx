import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import IconInbox from "../../assets/images/user.png";
import axios from "../../utils/axios";
export default function ChatRecruiter(props) {
  const { data, showMsg } = props;
  const [profile, setProfile] = useState({});

  const getUserData = async () => {
    try {
      const result = await axios.get(`api/user/recruiter/${data.idRecruiter}`);
      setProfile(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div
      onClick={() => {
        showMsg(data.message, profile.company);
      }}
    >
      <div className="friend-drawer mb-2 " style={{ cursor: "pointer" }}>
        <div className="img">
          <img
            className="profile-image"
            src={IconInbox}
            alt=""
            height="100"
            width="100"
          />
        </div>
        <div className="text3 ">
          <p style={{ marginBottom: "-2px", fontSize: "12px" }}>
            {profile.company}
          </p>
          <p className="text-muted" style={{ fontSize: "8px" }}>
            {data.subject}
          </p>
        </div>
      </div>
    </div>
  );
}
