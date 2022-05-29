import React, { useState, useEffect } from "react";
import DogSearch from "../../subcomponents/dogSearch/DogSearch";
import pawIcon from "../../../icons/paw.png";
import data from "../../../data/data.json";

function SearchPage({ dogList, setDogList }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Temporary for load on first entry
    // Will remove once Node backend built
    if (dogList == data) setLoaded(true);
    setTimeout(() => {
      setLoaded(true);
    }, 2000);

    setDogList(data);
  }, []);

  return (
    <section className="searchPage">
      {!loaded && (
        <div className="searchPage-loading">
          {" "}
          <h3 className="searchPage-title"> Searching for pups </h3>
          <img src={pawIcon} alt="paw icon" className="searchPage-paw-icon" />
        </div>
      )}
      {loaded && <DogSearch dogList={data} />}
    </section>
  );
}

export default SearchPage;
