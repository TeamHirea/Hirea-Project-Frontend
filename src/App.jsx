import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PublicRoute from "./utils/routes/PublicRoute.js";
import PrivateRoute from "./utils/routes/PrivateRoute";
import SignupJobSeeker from "./pages/SignupJobSeeker";
import Landing from "./pages/Landing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}></Route>
        <Route element={<PrivateRoute />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/SignupJobSeeker" element={<SignupJobSeeker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
