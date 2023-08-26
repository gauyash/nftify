import React from "react";
import { Icon } from "@iconify/react";
const Sidebar = ({ handleNavigation, isToken, handleToggle }) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center logo_container justify-between gap-lg">
          <div className="flex items-center gap-lg">
            <div className="menu clr_white flex items-center">
              <img src="/public/images/logo_icon.png" alt="" />
            </div>
            <h1 className="logo clr_white">NFTify</h1>
          </div>
          <Icon
            className="close_icon"
            icon="material-symbols:close"
            color="white"
            width="30"
            onClick={handleToggle}
          />
        </div>

        <ul className="navigation">
          <li
            onClick={handleNavigation}
            className={`clr_white flex items-center gap-lg ${
              isToken ? "selected_tab" : ""
            }`}
          >
            <Icon icon="ic:baseline-token" />
            <p>Token Address</p>
          </li>
          <li
            onClick={handleNavigation}
            className={`clr_white flex items-center gap-lg ${
              !isToken ? "selected_tab" : ""
            }`}
          >
            <Icon icon="fluent:pair-24-filled" />
            <p>Pair Address</p>
          </li>
        </ul>
      </div>

      <div className="social_media flex gap-lg items-center ">
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
      </div>
    </div>
  );
};
<img className="icon" src="/images/icon.png" alt="" />;

export default Sidebar;
