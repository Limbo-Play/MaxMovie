import React from "react";
import MainPageFooter from "./MainPageFooter";
import logo from "../../assets/CarouselCircle1.png";
import logo2 from "../../assets/CarouselCircle2.png";
import logo3 from "../../assets/CarouselCircle3.png";
import dot from "../../assets/Dot.png";
import MainTitle from "../../components/MainTitle/MainTitle";
import Slider from "react-slick";
import "./mainPage.scss";

function AboutMaxMovie() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: true,
    pauseOnHover: true,
    appendDots: (dots) => <ul> {dots} </ul>,
    customPaging: (i) => <img src={dot} alt="dot" />,
  };
  return (
    <>
      <div className="centerPositionColumn">
        <MainTitle />
        <Slider {...settings}>
          <div className="sliderPosition">
            <header className="sliderAboutText">
              Discover TV-shows & Movies <br /> to watch together
            </header>
            <img src={logo} alt="logo" />
            <p>Sign up with email</p>
          </div>
          <div className="sliderPosition">
            <header className="sliderAboutText">
              <br />
              Connect with a partner
            </header>
            <img src={logo2} alt="logo" />
            <p>Sign up with email</p>
          </div>
          <div className="sliderPosition">
            <header className="sliderAboutText">
              Find shows to watch together <br /> by swiping and matching
            </header>
            <img src={logo3} alt="logo" />
            <p>Sign up with email</p>
          </div>
        </Slider>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <MainPageFooter />
      </div>
    </>
  );
}

export default AboutMaxMovie;
