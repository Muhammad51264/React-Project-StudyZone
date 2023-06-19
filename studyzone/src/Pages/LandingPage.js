import React from "react";
function LandingPage() {
  return (
    <>
    {/* backgroundImage&info */}
      <div className="ctn">
        <img
          src="Images/header_width_bg.png"
          className="card-img bg_landing_page "
          alt="Stony Beach"
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className=" textBox_header_landing_page">
                <h2 className="card-title title_in_bg"> Online is now </h2>
                <h2>much easier</h2>
                <span className="card-text">
                  StudyZone is an interesting platform that will teach
                </span>
                <p>you in more an interactive way</p>
                <button className="btn_landing_page_Join_for_free">
                  Join for free
                </button>
              </div>{" "}
            </div>
            <div className="col">
              <div className="girl_img ">
                <img
                  src="Images/girl_landing_page.png"
                  className="card-img"
                  alt="Stony Beach"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
          {/* /backgroundImage&info */}

    </>
  );
}

export default LandingPage;
