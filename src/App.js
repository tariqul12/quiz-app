import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Quiz from "./Components/Pages/Quiz";
import Result from "./Components/Pages/Result";
import Signup from "./Components/Pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route
              path="/*"
              element={
                <h1>404. Page not ffffffffooooooouuuuuunnnnnnndddddd</h1>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
