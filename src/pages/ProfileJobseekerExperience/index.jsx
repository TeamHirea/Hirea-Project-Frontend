import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/ProfileJobseeker";
import Experience from "../../components/Experience";

import { useParams } from "react-router-dom";

import "./ProfileJobseekerExperience.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserJobseekerById } from "../../redux/action/user";

function ProfileJobseekerExperience() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  console.log(id);

  useEffect((id) => {
    dispatch(getUserJobseekerById(id));
  }, []);
  console.log(user.data);

  return (
    <>
      <Header />
      <main className="profile-jobseeker">
        <Profile data={user.data} />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default ProfileJobseekerExperience;
