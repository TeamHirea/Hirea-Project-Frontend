import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PublicRoute from "./utils/routes/PublicRoute.js";
import PrivateRoute from "./utils/routes/PrivateRoute";
import SignupJobSeeker from "./pages/SignupJobSeeker";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}></Route>
        <Route path="/SignupJobSeeker" element={<SignupJobSeeker />} />

        <Route element={<PrivateRoute />}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
