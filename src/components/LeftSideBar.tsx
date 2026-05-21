import { EllipsisVertical } from "lucide-react";
import { Search } from "lucide-react";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  return (
    <div className="left-side">
      <div className="left-side-top">
        <div className="left-side-nav">
          <img src="/chat-logo.svg" className="logo" alt="logo" />
          <div className="menu">
            <EllipsisVertical size={20} />
            <div className="menu-dropdown">
              <p>Edit Profile</p>
              <hr />
              <p>logout</p>
            </div>
          </div>
        </div>
        <div className="left-side-search">
          <Search size={18} />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="left-side-list">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div key={index} className="friends">
              <img src="/profile.png" alt="profile" />
              <div>
                <p>Kane Harris</p>
                <span>Hello, How are you?</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export { LeftSideBar };
