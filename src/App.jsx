import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PublicRoute from "./utils/routes/RecruiterRoute.js";
import RecruiterRoute from "./utils/routes/RecruiterRoute";
import JobseekerRoute from "./utils/routes/JobseekerRoute";
import SignupJobSeeker from "./pages/SignupJobSeeker";
import Landing from "./pages/Landing";

import SignupRecruiter from "./pages/SignupRecruiter";
import Hire from "./pages/Hire";
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
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
