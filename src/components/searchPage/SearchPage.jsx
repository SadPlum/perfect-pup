import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DogSearch from "../dogSeach/DogSearch";
import pawIcon from "../../icons/paw.png";

function SearchPage({ dogList, setDogList }) {
  const [isDogFound, setIsDogFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dogs, setDogs] = useState([]);
  // const location = useLocation();

  const fetchDogs = async (amount) => {
    try {
      let response = await fetch(
        `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=RANDOM&limit=${amount}`,
        {
          method: "GET",
          mode: "cors",
          headers: { "x-api-key": "27de5e48-de76-4181-b9da-03d9fa9d13ec" },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          setDogs(response);
          setIsDogFound(true);
          setIsLoading(false);
        });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (dogs.length == 0) {
      fetchDogs(6);
    }
  }, []);

  return (
    <section className="searchPage">
      {isLoading && <img src={pawIcon} alt="paw icon" />}
      <DogSearch dogList={dogs} />
    </section>
  );
}

export default SearchPage;
