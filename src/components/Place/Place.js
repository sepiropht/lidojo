import React, { Component } from "react";
import moment from "moment";
import Portal from "react-portal";
import "./place.css";
import fakeApi from "../../fake-api";
import { urlApi } from "../../fake-api";

export default class PlaceContainer extends Component {
  constructor({ match }) {
    super();
    this.state = {
      places: [],
      id: match.params.id
    };
  }
  componentDidMount() {
    console.log("component mounted");
    fakeApi();
    fetch(urlApi + "/places/" + this.state.id)
      .then(res => res.json())
      .then(place => {
        console.log("place", place);
        this.setState({
          place
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return <Place place={this.state.place} />;
  }
}

const Calendar = dates => {
  const datesA = dates.dates;
  const arr = datesA.map((date, i) =>
    <li key={i}>
      {" "}{date.start} {date.end}
    </li>
  );
  return (
    <ul>
      {arr}
    </ul>
  );
};
const Place = placeq => {
  if (!placeq.place) return <div />;

  const place = placeq.place;
  let text1 = place.tip.text.split("<br/><br/>")[0];
  let text2 = place.tip.text.split("<br/><br/>")[1];

  return (
    <div className="container-place">
      <img
        className="pres-img"
        src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide1"
      />
      <h1>
        {place.name}
      </h1>
      <h2>
        {place.name}
      </h2>
      <div className="more-datails">
        <span className="price">
          {place.ticket_price}
        </span>
        <span>Ajouter à une liste </span>
        <img src="https://www.dojoapp.fr/plus-icon.svg" />
      </div>
      <div className="note">
        La note dojo {place.rating / 10}/10
      </div>
      <p className="description">
        {text1}
        <br />
        <br />
        {text2}
      </p>
      <div className="info-map">
        <div className="info">
          <span>Tarifs</span>
          <span>
            {place.ticket_price}
          </span>
          <span>Téléphone</span>
          <span>
            {place.phone}
          </span>
          <span>Site web</span>
          <span>
            {place.website}
          </span>
          <span>Adresse</span>
          <span>
            {place.address.line1}
          </span>
          <span>Quand</span>
          <Calendar dates={place.times.dates} />
          <span>Proposer une modification</span>
        </div>

        <div className="map">
          <img
            width="400"
            src="https://maps.googleapis.com/maps/api/staticmap?center=douala&zoom=12&scale=1&size=400x300&maptype=roadmap&format=png&visual_refresh=true&key=AIzaSyCAPzjOjVu9169UcAQGF4bv2vKDV_JOvR0"
            alt="Google Map of douala"
          />
        </div>
      </div>
      <div className="call-actions">
        <div>
          <img src="https://www.dojoapp.fr/whiteicons/facebook.svg" />
          <span>partager sur facebook</span>
        </div>
        <div>
          <img src="https://www.dojoapp.fr/whiteicons/twitter.svg" />
          <span>partager sur twitter</span>
        </div>
        <div>
          <img src="https://www.dojoapp.fr/whiteicons/pinterest.svg" />
          <span>partager sur pinterest</span>
        </div>
        <div>
          <img src="https://www.dojoapp.fr/messenger.svg" />
          <span>partager via messenger</span>
        </div>
        <div>
          <img src="https://www.dojoapp.fr/whiteicons/link.svg" />
          <span> copier l'url'</span>
        </div>
        <div>
          <img src="https://www.dojoapp.fr/plus-icon.svg" />
          <span>Ajouter à une liste</span>
        </div>
      </div>
    </div>
  );
};
