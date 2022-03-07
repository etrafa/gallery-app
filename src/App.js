import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

//components

import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import UserProfile from "./components/userProfile/UserProfile";
import SearchResult from "./components/home/SearchResult";

function App() {
  const [query, setQuery] = useState(undefined);
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home query={query} setQuery={setQuery} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/search" element={<SearchResult query={query} />} />
      </Routes>
    </Router>
  );
}

export default App;
