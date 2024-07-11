import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apply from "./pages/Apply";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* 메인 */}

          <Route path="/login" element={<Login />} /> {/* 커뮤니티 */}
          <Route path="/signup" element={<Signup />} /> {/* 커뮤니티 */}
          <Route path="/apply" element={<Apply />} /> {/* 지원관리 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

