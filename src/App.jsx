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
import EmailActivation from "./pages/EmailActivation";
import ConfirmPassword from "./pages/ConfirmPassword";
import RequestResetPassword from "./pages/RequestResetPassword";
import ProfileJobseekerPortofolio from "./pages/ProfileJobseekerPortofolio";
import ProfileJobseekerExperience from "./pages/ProfileJobseekerExperience";

import Chat from "./pages/Chat";
import Inbox from "./pages/Chat/inbox";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}></Route>
        <Route element={<RecruiterRoute />}></Route>
        <Route element={<JobseekerRoute />}></Route>

        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/SignupJobSeeker" element={<SignupJobSeeker />} />
        <Route path="/SignupRecruiter" element={<SignupRecruiter />} />
        <Route path="/SigninRecruiter" element={<SigninRecruiter />} />
        <Route path="/SigninJobSeeker" element={<SigninJobSeeker />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/CompanyProfile" element={<CompanyProfile />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route
          path="/editProfileRecruiter"
          element={<EditProfileRecruiter />}
        />
        <Route path="/EmailActivation" element={<EmailActivation />} />
        <Route path="/ConfirmPassword" element={<ConfirmPassword />} />
        <Route
          path="/RequestResetPassword"
          element={<RequestResetPassword />}
        />
        <Route
          path="/ProfileJobseekerPortofolio/:id"
          element={<ProfileJobseekerPortofolio />}
        />
        <Route
          path="/ProfileJobseekerExperience/:id"
          element={<ProfileJobseekerExperience />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
