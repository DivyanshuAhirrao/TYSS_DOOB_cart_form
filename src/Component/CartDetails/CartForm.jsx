import React from "react";
import { RiRecycleFill } from "react-icons/ri";
import "../CartDetails/form.css";

const CartForm = () => {
  return (
    <section id="form-main">
      <form action="" id="form-box">
        <div className="fullname">
          <aside className="fullname-side-1 form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" />
          </aside>
          <aside className="fullname-side-2 form-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" />
          </aside>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="form-group">
          <label htmlFor="extra-details">
            Use 8 or more characters with a mix of letters, numbers and symbols.
            Must not contain your name or username.
          </label>
        </div>

        <div className="captcha-box">
          <aside className="cap-left">
            <article className="captcha-main">
              <div className="check-box-content">
                <input type="checkbox" id="check-box" name="data" /> 
                <h5>I'm not a robot</h5>
              </div>
              <div className="captcha-details">
                <RiRecycleFill className="captcha-img"/>
                <h6 className="cap-text">reCAPTCHA</h6>
                <p className="cap-privacy">Privacy - Terms</p>
              </div>
            </article>
          </aside>
          <aside className="cap-right"></aside>
        </div>

        <div className="form-group">
          <label htmlFor="extra-details">
          Envato collects and uses personal data in accordance with our  <u> Privacy Policy </u>. By creating an account, you agree to our <u>Terms & Conditions </u>.
          </label>
        </div>
      </form>
    </section>
  );
};

export default CartForm;
