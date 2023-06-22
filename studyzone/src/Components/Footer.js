import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center main_footer text-white">
        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <img src="../Images/logo-white-removebg.png" alt="..."height={"12%"} width={"12%"} className="footer_logo"/>
              <div className="slogan_footer">
              <p>Empower Your Mind, Expand Your Horizons!</p>
              </div>
            </p>
          </section>
        </div>
        <p>Subscribe to get our Newsletter</p>
        <div className="container  pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center gap-3">
            <input type="text" id="subscribe_input" placeholder="Your Email" />
              <button
                className="btn btn-secondary "
                id="btn_subscribe"
                type="button"
              >
                Subscribe{" "}
              </button>
            </p>
          </section>
        </div>
        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center gap-3">
<p>Careers</p>        
<p>Privacy Policy</p>
<p>Terms & Conditions</p>
            </p>
          </section>
        </div>

        <div className="text-center ">
          © 2023 Class Technologies Inc. 

        </div>
      </footer>
      {/* /footer */}
    </div>
  );
};

export default Footer;
