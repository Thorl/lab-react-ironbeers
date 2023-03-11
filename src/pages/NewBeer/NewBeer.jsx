import axios from "axios";

import { useState } from "react";

import "./NexBeer.css";

export const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };

    const addedBeer = await axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      newBeer
    );

    console.log("A new beer was successfully added: ", addedBeer);

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel("");
    setContributedBy("");
  };

  return (
    <form onSubmit={handleSubmit} className="newBeerForm">
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="">Tagline</label>
      <input
        type="text"
        value={tagline}
        onChange={(e) => {
          setTagline(e.target.value);
        }}
      />
      <label htmlFor="">Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <label htmlFor="">First Brewed</label>
      <input
        type="text"
        value={firstBrewed}
        onChange={(e) => {
          setFirstBrewed(e.target.value);
        }}
      />
      <label htmlFor="">Brewer's Tips</label>
      <input
        type="text"
        value={brewersTips}
        onChange={(e) => {
          setBrewersTips(e.target.value);
        }}
      />
      <label htmlFor="">Attenuation Level</label>
      <input
        type="number"
        value={attenuationLevel}
        onChange={(e) => {
          setAttenuationLevel(e.target.value);
        }}
      />
      <label htmlFor="">Contributed By</label>
      <input
        type="text"
        value={contributedBy}
        onChange={(e) => {
          setContributedBy(e.target.value);
        }}
      />
      <button className="newBeerForm__btn">Add New Beer</button>
    </form>
  );
};
