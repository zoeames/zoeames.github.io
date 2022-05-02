import React from "react";

const heroContent = {
  heroImage: "images/me.jpg",
  heroMobileImage: "images/me-mobile.jpg",
  heroTitleName: "Zoë Ames",
  heroDesignation: "UI Architect",
  heroDescriptions: `I'm a astrophysicist turned web developer who is passionate about making clean, performant, and accessible websites.`,
};

const Hero = () => {
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={`${heroContent.heroMobileImage}`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <div className="social-buttons">
              <a className="button" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zoeames/">
                <span className="button-text">linkedin</span>
                <span className="button-icon fa-brands fa-linkedin-in"></span>
              </a>
              <a className="button" target="_blank" rel="noreferrer" href="mailto: zoeames@gmail.com">
                <span className="button-text">email</span>
                <span className="button-icon fa-solid fa-envelope"></span>
              </a>
              <a className="button" target="_blank" rel="noreferrer" href="https://github.com/zoeames">
                <span className="button-text">github</span>
                <span className="button-icon fa-brands fa-github"></span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
