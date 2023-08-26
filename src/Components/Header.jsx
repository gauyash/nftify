import React from "react";

const Header = ({ handleSubmit, handleToggle }) => {
  return (
    <nav>
      <form
        onSubmit={handleSubmit}
        className="flex gap-lg justify-between items-center"
      >
        <div className="flex gap-sm items-center logo_box">
          <div
            onClick={handleToggle}
            className="menu clr_white flex items-center"
          >
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <h1 className="logo clr_white">NFTify</h1>
        </div>
        <button className="connect_button clr_white">Connect</button>
        <div className="search_bar flex items-center">
          <input
            name="search"
            className="clr_white"
            type="text"
            placeholder="Search"
          />
          <button className="search_bar_button clr_white">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Header;
