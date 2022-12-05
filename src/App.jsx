import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PublicRoute from "./utils/routes/RecruiterRoute.js";
import RecruiterRoute from "./utils/routes/RecruiterRoute";
import JobseekerRoute from "./utils/routes/JobseekerRoute";
import SignupJobSeeker from "./pages/SignupJobSeeker";
import Landing from "./pages/Landing";

import SignupRecruiter from "./pages/SignupRecruiter";
import SigninRecruiter from "./pages/SigninRecruiter";
import SigninJobSeeker from "./pages/SigninJobSeeker";
import ResetPassword from "./pages/ResetPassword";
import CompanyProfile from "./pages/CompanyProfile";
import Hire from "./pages/Hire";
import EditProfileRecruiter from "./pages/EditProfileRecruiter";
import EditProfileJobseeker from "./pages/EditProfileJobseeker";
import EmailActivation from "./pages/EmailActivation";
import SendResetPassword from "./pages/SendResetPassword";
import RequestResetPassword from "./pages/RequestResetPassword";
import ProfileJobseeker from "./pages/ProfileJobseeker";
import MyProfile from "./pages/MyProfile";

import Chat from "./pages/Chat";
import Inbox from "./pages/Chat/inbox";
import EmailVerificationRecruiter from "./pages/EmailVerificationRecruiter";
import OptionLogin from "./pages/optionLogin";
import OptionRegister from "./pages/optionRegister";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          {/* AUTH */}
          <Route path="/signup/jobseeker" element={<SignupJobSeeker />} />
          <Route path="/signup/recruiter" element={<SignupRecruiter />} />
          <Route
            path="/jobseeker/activated/:token"
            element={<EmailActivation />}
          />
          <Route
            path="/recruiter/activated/:token"
            element={<EmailVerificationRecruiter />}
          />
          <Route path="/signin/recruiter" element={<SigninRecruiter />} />
          <Route path="/signin/jobseeker" element={<SigninJobSeeker />} />
          <Route path="/reset/send" element={<ResetPassword />} />
          <Route
            path="/reset/send/success"
            element={<RequestResetPassword />}
          />
          <Route path="/reset/:otp" element={<SendResetPassword />} />
          <Route path="/optionLogin" element={<OptionLogin />} />
          <Route path="/optionRegister" element={<OptionRegister />} />
        </Route>

        <Route element={<RecruiterRoute />}>
          {/* HALAMAN RECRUITER */}
          <Route path="/recruiter/profile" element={<CompanyProfile />} />
          <Route path="/recruiter/edit" element={<EditProfileRecruiter />} />
          <Route path="/recruiter/hire/:id" element={<Hire />} />
          <Route path="/jobseeker/:id" element={<ProfileJobseeker />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/inbox" element={<Inbox />} />
        </Route>

        <Route element={<JobseekerRoute />}>
          {/* HALAMAN JOBSEEKER */}
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/profile/edit" element={<EditProfileJobseeker />} />
        </Route>

        {/* MAIN PAGE */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
<<<<<<< HEAD

        {/* AUTH */}
        <Route path="/signup/jobseeker" element={<SignupJobSeeker />} />
        <Route path="/signup/recruiter" element={<SignupRecruiter />} />
        <Route
          path="/jobseeker/activated/:token"
          element={<EmailActivation />}
        />
        <Route
          path="/recruiter/activated/:token"
          element={<EmailVerificationRecruiter />}
        />
        <Route path="/signin/recruiter" element={<SigninRecruiter />} />
        <Route path="/signin/jobseeker" element={<SigninJobSeeker />} />
        <Route path="/reset/send" element={<ResetPassword />} />
        <Route path="/reset/send/success" element={<RequestResetPassword />} />
        <Route path="/reset/:otp" element={<SendResetPassword />} />
        <Route path="/optionLogin" element={<OptionLogin />} />
        <Route path="/optionRegister" element={<OptionRegister />} />

        {/* HALAMAN RECRUITER */}
        <Route path="/recruiter/profile" element={<CompanyProfile />} />
        <Route path="/recruiter/edit" element={<EditProfileRecruiter />} />
        <Route path="/recruiter/hire/:id" element={<Hire />} />
        <Route path="/jobseeker/:id" element={<ProfileJobseeker />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/inbox" element={<Inbox />} />

        {/* HALAMAN JOBSEEKER */}
        <Route path="/profile" element={<MyProfile />} />
=======
        <Route element={<Test />} path="/test" />
>>>>>>> 85728cd0d08f26c48fdd135e7ddc36a5b649cbfc
      </Routes>
    </BrowserRouter>
  );
}

export default App;
