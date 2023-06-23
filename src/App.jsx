import React, { useState } from "react";
import "./App.css";
import Register from "./components/register/register";

function App() {
  const [registerState, setRegisterState] = useState(false);

  function handleRegister() {
    setRegisterState(!registerState);
  }
  return (

    <div className="main-content">
      {registerState ? <Register value={registerState} getData={setRegisterState} /> : <></>}

      <div className="h-main">

        <div className="h-name">
          <div className="h-left">ATG,<span style={{ color: "#5C5D5D" }}>W</span></div>
          <div className="h-img">
            <img src="/icons/union.png" alt="" />
          </div>
          <div className="h-right">RLD</div>
        </div>

        <div className="h-div2">
          <img src="/icons/Vector.png" alt="search" />
          <input type="text" placeholder="Search for your favorite groups in ATG" />
        </div>

        <div className="h-div3" onClick={handleRegister}>
          Create account.<span style={{ color: "#2F6CE5" }}>It's free!</span>
        </div>

        <div className="h-div4">
          <img src="/icons/dropdown.png" alt="dropdown" />
        </div>
      </div>

      <div className="image-content">
        <img src="/icons/image.png" alt="back" />
        <div className="i-div1">Computer Engineering</div>
        <div className="i-para1">142,765 Computer Engineers follow this</div>
      </div>

      <div className="i-line1"></div>

      <div className="i-div2">
        <div id="all-posts">All Posts(32)</div>
        <div id="article">Article</div>
        <div id="event">Event</div>
        <div id="education">Education</div>
        <div id="job">Job</div>
      </div>

      <div className="i-div3">
        <div className="post">Write a Post</div>
        <div className="i-div4">
          <img src="/icons/dropdown.png" alt="fropdown1" />
        </div>
      </div>

      <button className="i-div5">
        <div className="i-div6">
          <img src="/icons/join.png" alt="join" />
        </div>
        <div className="i-div7">Join Group</div>
      </button>

      <div className="i-line2"></div>
      <div className="i-line3"></div>

      <aside>
        <div className="location">
          <img src="/icons/location.png" alt="location" id="location" />
          <img src="/icons/dot.png" alt="dot" id="dot" />
        </div>
        <div className="a-div1">Noida, India</div>
        <div className="edit">
          <img src="/icons/edit.png" alt="edit" />
        </div>
        <div className="line4"></div>
        <div className="a-div2">
          <div className="info">
            <img src="/icons/info.png" alt="info" />
          </div>
          <div className="a-div3">
            Your location will help us serve better and extend a personalised experience.
          </div>
        </div>
      </aside>

      <div className="card">
        <div className="c-img">
          <img src="icons/card1.png" alt="card1" />
        </div>
        <div className="c-article">✍️ Article</div>
        <div className="c-headline">
          What if famous brands had regular fonts? Meet RegulaBrands!
        </div>
        <div className="c-threeDots">
          <img src="icons/three-dots.png" alt="threeDots" />
        </div>
        <div className="c-subHeading">
          I've worked in UX for the better part of a decade. From now on, I plan to rei…
        </div>
        <div className="c-profile">
          <img src="icons/profile1.png" alt="profile1" />
        </div>
        <div className="c-name">Sarthak Kamra</div>
        <div className="c-eye">
          <img src="icons/eye.svg" alt="eye" />
        </div>
        <div className="c-views">1.4k views</div>
        <div className="c-share">
          <img src="icons/share.png" alt="share" />
        </div>
      </div>

      <div className="card card1">
        <div className="c-img">
          <img src="icons/card2.png" alt="card1" />
        </div>
        <div className="c-article">🔬️ Education</div>
        <div className="c-headline">
          Tax Benefits for Investment under National Pension Scheme launched by Government
        </div>
        <div className="c-threeDots">
          <img src="icons/three-dots.png" alt="threeDots" />
        </div>
        <div className="c-subHeading">
          I've worked in UX for the better part of a decade. From now on, I plan to rei…
        </div>
        <div className="c-profile">
          <img src="icons/profile2.png" alt="profile1" />
        </div>
        <div className="c-name">Sarah West</div>
        <div className="c-eye">
          <img src="icons/eye.svg" alt="eye" />
        </div>
        <div className="c-views">1.4k views</div>
        <div className="c-share">
          <img src="icons/share.png" alt="share" />
        </div>
      </div>

      <div className="card card2">
        <div className="c-img">
          <img src="icons/card3.png" alt="card1" />
        </div>
        <div className="c-article">🗓️ Meetup</div>
        <div className="c-headline">
          Finance & Investment Elite Social Mixer @Lujiazui
        </div>
        <div className="c-threeDots c-dots">
          <img src="icons/three-dots.png" alt="threeDots" />
        </div>

        <div className="c-date-location">
          <div className="c-calender">
            <img src="icons/calender.png" alt="calender" />
          </div>
          <div className="c-date">Fri, 12 Oct, 2018</div>
          <div className="c-location">
            <img src="icons/location1.png" alt="location1" />
          </div>
          <div className="c-locationName">Ahmedabad, India</div>
        </div>

        <button className="visit">Visit Website</button>

        <div className="options">
          <div className="c-edit">Edit</div>
          <div className="c-report">Report</div>
          <div className="c-option">Option 3</div>
        </div>

        <div className="c-profile profile3">
          <img src="icons/profile3.png" alt="profile1" />
        </div>
        <div className="c-name c-name1">Ronal Jones</div>
        <div className="c-eye c-eye1">
          <img src="icons/eye.svg" alt="eye" />
        </div>
        <div className="c-views c-views1">1.4k views</div>
        <div className="c-share c-share1">
          <img src="icons/share.png" alt="share" />
        </div>
      </div>

      <div className="card card3">
        <div className="c-article article1">💼️ Job</div>
        <div className="c-headline c-headline1">
          Software Developer
        </div>
        <div className="c-threeDots c-threeDots1">
          <img src="icons/three-dots.png" alt="threeDots" />
        </div>

        <div className="c-date-location1">
          <div className="c-calender">
            <img src="icons/bag.png" alt="bag" />
          </div>
          <div className="card-name">Innovaccer Analytics Private Ltd.</div>
          <div className="c-location c-location1">
            <img src="icons/location1.png" alt="location1" />
          </div>
          <div className="c-locationName c-locationName1">Noida, India</div>
        </div>

        <button className="visit visit1">Apply on Timesjobs</button>

        <div className="c-profile profile4">
          <img src="icons/profile4.png" alt="profile1" />
        </div>
        <div className="c-name c-name2">Joseph Gray</div>
        <div className="c-eye c-eye2">
          <img src="icons/eye.svg" alt="eye" />
        </div>
        <div className="c-views c-eye2">1.4k views</div>
        <div className="c-share c-share2">
          <img src="icons/share.png" alt="share" />
        </div>
      </div>
    </div>
  );
}

export default App;
