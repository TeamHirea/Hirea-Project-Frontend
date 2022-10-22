import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/ProfileJobseeker";
import Experience from "../../components/Experience";

import { useParams } from "react-router-dom";

import "./ProfileJobseekerExperience.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserJobseekerById } from "../../redux/action/user";
import { getUserJobseekerExperienceById } from "../../redux/action/experience";

function ProfileJobseekerExperience() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.user.data);
  const experience = useSelector((state) => state.experience.data);

  useEffect(() => {
    dispatch(getUserJobseekerById(id));
  }, []);

  useEffect(() => {
    dispatch(getUserJobseekerExperienceById(id));
  }, []);

  return (
    <>
      <Header />
      <main className="profile-jobseeker">
        <Profile data={user} />
        <Experience data={experience} />
      </main>
      <Footer />
    </>
  );
}

export default ProfileJobseekerExperience;
