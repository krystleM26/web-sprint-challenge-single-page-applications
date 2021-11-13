import React from "react";

const Home = () => {
  return (
    <div className="homepage">
      <nav>
        <a id="home" href="#">
          Home
        </a>
        <a id="help" href="#">
          Help
        </a>
      </nav>

      <div className="restaurants">
        <div className="boxes">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4"></div>
          <div className="box5"></div>
          <div className="box6"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
