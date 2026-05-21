import "./RightSideBar.css";

const RightSideBar = () => {
  return (
    <div className="right-side">
      <div className="right-side-profile">
        <img src="/profile.png" alt="Profile" />
        <h3>
          Sam Dave <img src="/green-dot.png" alt="" className="dot" />
        </h3>
        <p>Hey there! I am Sam Dave using chattrix</p>
      </div>
      <hr />
      <div className="right-side-media">
        <p>media</p>
        <div>
          <img src="/nature.png" alt="" />
          <img src="/nature.png" alt="" />
          <img src="/nature.png" alt="" />
          <img src="/nature.png" alt="" />
          <img src="/nature.png" alt="" />
          <img src="/nature.png" alt="" />
        </div>
      </div>
      <button>logout</button>
    </div>
  );
};

export { RightSideBar };
