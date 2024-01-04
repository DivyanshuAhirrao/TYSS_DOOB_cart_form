import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import "../CartDetails/links.css";

const Links = () => {
  return (
    <section id="link-box">
      <article className="link-art-1">
        <aside className="art1-side-1">
          <h4 className="art1-side-1-text">Create Account </h4>
        </aside>
        <aside className="art1-side-2">
          <h4 className="side-2-text"> Already have an Account ? </h4>
          <button className="art1-btn">Sign In</button>
        </aside>
      </article>
      <article className="link-art-2">
        <div className="link-container-1 link-container">
          <div className="link-icon">
            <FcGoogle />
          </div>
          <div className="link-container-text">
            <h2>Continue With Google</h2>
          </div>
        </div>
        <div className="link-container-2 link-container">
          <div className="link-icon">
            <SiApple />
          </div>
          <div className="link-container-text">
            <h2>Continue With Apple</h2>
          </div>
        </div>
        <div className="link-container-3 link-container">
          <div className="link-icon">
            <SiFacebook className="icon-fb"/>
          </div>
          <div className="link-container-text">
            <h2>Continue With Facebook</h2>
          </div>
        </div>
      </article>
      <article className="or-line">
        <fieldset>
          <legend>or</legend>
        </fieldset>
      </article>
    </section>
  );
};

export default Links;
