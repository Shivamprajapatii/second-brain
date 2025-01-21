import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import Sharepage from "./pages/Sharepage"


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />}/>
      <Route path="/" element={<Dashboard />} />
      <Route path="/brain/share" element={<Sharepage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
