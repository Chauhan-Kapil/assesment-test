import React, { useState } from "react";
import { data } from "../airportData";
import Counter from "./Counter";
const Screen2 = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureSuggestions, setDepartureSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const classes = ["Economy", "Premium Economy", "Business"];

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : data.filter(
          (airport) =>
            airport.airportName.toLowerCase().slice(0, inputLength) ===
            inputValue
        );
  };

  const onDepartureChange = (event) => {
    const value = event.target.value;
    setDeparture(value);
    setDepartureSuggestions(getSuggestions(value));
  };

  const onDestinationChange = (event) => {
    const value = event.target.value;
    setDestination(value);
    setDestinationSuggestions(getSuggestions(value));
  };

  const onDepartureSelect = (airport) => {
    setDeparture(airport.airportName);
    setDepartureSuggestions([]);
  };

  const onDestinationSelect = (airport) => {
    setDestination(airport.airportName);
    setDestinationSuggestions([]);
  };

  const onClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const interchangeAirports = () => {
    const tempDeparture = departure;
    setDeparture(destination);
    setDestination(tempDeparture);
  };

  return (
    <div className="container">
      <h2>Flight Search</h2>
      <div className="input-container">
        <input
          type="text"
          className="departure"
          placeholder="Departure"
          value={departure}
          onChange={onDepartureChange}
        />
        <ul className="suggestions">
          {departureSuggestions.map((airport, index) => (
            <li key={index} onClick={() => onDepartureSelect(airport)}>
              {airport.airportName}
            </li>
          ))}
        </ul>
      </div>
      <button className="btn" onClick={interchangeAirports}>
        Interchange
      </button>
      <div className="input-container">
        <input
          type="text"
          className="goingto"
          placeholder="Destination"
          value={destination}
          onChange={onDestinationChange}
        />
        <ul className="suggestions">
          {destinationSuggestions.map((airport, index) => (
            <li key={index} onClick={() => onDestinationSelect(airport)}>
              {airport.airportName}
            </li>
          ))}
        </ul>
      </div>
      <div className="input-container ">
        <select
          className="selctedtype"
          value={selectedClass}
          onChange={onClassChange}
        >
          {classes.map((classType, index) => (
            <option key={index} value={classType}>
              {classType}
            </option>
          ))}
        </select>
      </div>
      <div style={{}}>
        <label>Adult</label>
        <Counter
          value={adults}
          onIncrement={() => setAdults(Math.min(adults + 1, 9))}
          onDecrement={() => setAdults(Math.max(adults - 1, 0))}
        />
        <label>Child(2-12 years)</label>
        <Counter
          value={children}
          onIncrement={() => setChildren(Math.min(children + 1, 9))}
          onDecrement={() => setChildren(Math.max(children - 1, 0))}
        />
        <label>Infant(below 2 years)</label>
        <Counter
          value={infants}
          onIncrement={() => setInfants(Math.min(infants + 1, 9))}
          onDecrement={() => setInfants(Math.max(infants - 1, 0))}
        />
      </div>

      <div className="input-container">
        {classes.map((classType, index) => (
          <label key={index}>
            <input
              type="radio"
              name="classType"
              value={classType}
              checked={selectedClass === classType}
              onChange={() => setSelectedClass(classType)}
            />
            {classType}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Screen2;
