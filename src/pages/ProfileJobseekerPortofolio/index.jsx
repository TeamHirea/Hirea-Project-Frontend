import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/ProfileJobseeker";
import Portofolio from "../../components/Portofolio";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserJobseekerById } from "../../redux/action/user";

import "./ProfileJobseekerPortofolio.css";

export default function ProfileJobseekerPortofolio() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.user.data);
  const portofolio = useSelector((state) => state.portofolio.data);

  useEffect(() => {
    dispatch(getUserJobseekerById(id));
  }, []);

  return (
    <>
      <Header />
      <main className="profile-jobseeker">
        <Profile data={user} />
        <Portofolio data={portofolio} />
      </main>
      <Footer />
    </>
  );
}
