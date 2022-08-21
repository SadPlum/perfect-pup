import React, { useState, useEffect } from "react";
import DogSearch from "../../subcomponents/dogSearch/DogSearch";
import pawIcon from "../../../icons/paw.png";

import { getAllDogs } from "../../../functions/apiRequests.js";

function SearchPage() {
  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    getAllDogs().then((data) => setDogData(data));
  }, []);

  return (
    <section className="searchPage">
      {!dogData && (
        <div className="searchPage-loading">
          {" "}
          <h3 className="searchPage-title">Searching for pups</h3>
          <img src={pawIcon} alt="paw icon" className="searchPage-paw-icon" />
        </div>
      )}
      {dogData && <DogSearch dogList={dogData} />}
    </section>
  );
}

export default SearchPage;
