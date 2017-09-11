import React from "react";
import "./home.css";
import Slider from "react-slick";
import history from "../../history";
const settings = {
  infinite: true,
  slidesToScroll: 3,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000
};

const Slides = props =>
  <Slider {...settings}>
    {props.places.length
      ? props.places.map((place, i) =>
          <img
            key={i}
            onClick={() =>
              console.log(i, place, history) ||
              history.push(`/place/${place.id}`)}
            src={place.img}
            alt=""
          />
        )
      : <div />}
  </Slider>;
const Home = props =>
  <main>
    <img
      className="banner"
      src="https://s3-eu-west-1.amazonaws.com/dojo-website-assets/XQ3A5536.jpg"
      alt=""
    />

    <Slides className="slides" places={props.places} />
  </main>;

export default Home;
