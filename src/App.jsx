import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Result from "./Components/Result";
import Footer from "./Components/Footer";

function App() {
  // State for token data, search input, token/pair mode, and sidebar toggle
  const [tokenData, setTokenData] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [isToken, setIsToken] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // API base URL and default URLs for token and pair
  const API_BASE_URL = "https://api.dexscreener.com/latest/dex";
  const DEFAULT_TOKEN_URL = `${API_BASE_URL}/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`;
  const DEFAULT_PAIR_URL = `${API_BASE_URL}/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae`;

  // Fetch data based on search input and token/pair mode
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the appropriate URL based on search input and mode
        const url = searchValue
          ? `${API_BASE_URL}/search?q=${searchValue}`
          : isToken
          ? DEFAULT_TOKEN_URL
          : DEFAULT_PAIR_URL;

        const response = await fetch(url);
        const data = await response.json();
        setTokenData(data.pairs.slice(0, 10));
      } catch (error) {
        console.error("Error fetching token data:", error);
      }
    };

    fetchData();
  }, [searchValue, isToken]);

  // Handle form submission to perform search
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchValue(formData.get("search"));
  };

  // Handle navigation between token and pair views
  const handleNavigation = () => {
    setSearchValue(null);
    setIsToken((prevState) => !prevState);
  };

  // Handle toggling the sidebar
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="bg">
      <div className="container">
        {/* Sidebar component with toggle and navigation */}
        <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar handleNavigation={handleNavigation} isToken={isToken} handleToggle={handleSidebarToggle} />
        </aside>
        {/* Main section with header, search, and result */}
        <section className="main">
          <Header handleSubmit={handleSubmit} handleToggle={handleSidebarToggle} />
          <Result isToken={isToken} data={tokenData} />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
