import React from "react";
import "./partners.css";

function Partners() {
  return (
    <div className="partnerContainer">
      <p className="partnerContainerHeading">
        Standing Tall with Our Esteemed Brand Partners
      </p>

      <div className="partnersDisplayContainer">
        <div className="partnersDisplay">
          <div className="partnerImage">
            <img src={"/sponsor1.avif"} alt="Sponsor 1" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor2.avif"} alt="Sponsor 2" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor3.avif"} alt="Sponsor 3" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor4.avif"} alt="Sponsor 4" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor5.avif"} alt="Sponsor 5" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor6.avif"} alt="Sponsor 6" />
          </div>
        </div>

        <div className="partnersDisplay secondaryPartnersDisplay">
          <div className="partnerImage">
            <img src={"/sponsor1.avif"} alt="Sponsor 1" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor2.avif"} alt="Sponsor 2" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor3.avif"} alt="Sponsor 3" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor4.avif"} alt="Sponsor 4" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor5.avif"} alt="Sponsor 5" />
          </div>
          <div className="partnerImage">
            <img src={"/sponsor6.avif"} alt="Sponsor 6" />
          </div>
        </div>
      </div>

      <div className="PorfolioButtonContainer">
        <div className="PorfolioHeading lg:text-7xl sm:text-6xl text-md">
          <p>Our Handpicked Featured Portfolio</p>
        </div>
        <div className="PorfolioButtonContainerButton">
          <div className="PorfolioButtonContainerButtonDiv">
            <div className="heroSectionButtonInnerDiv">
              <button className="heroSectionButton">
                <span className="heroSectionButtonSpan"></span>
                <p className="heroSectionButtonP">See Projects</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
