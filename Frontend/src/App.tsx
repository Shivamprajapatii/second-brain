import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import BrainShare from "./pages/BrainShare"
import LandingPage from "./pages/LandingPage"
import PrivateRoute from "./hooks/PrivateRoute"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/api/v1/brain/:id" element={<BrainShare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
