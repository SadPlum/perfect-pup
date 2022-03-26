import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DogSearch from "../dogSeach/DogSearch";
import SingleDog from "../singleDog/SingleDog";

function SearchPage(props) {
  const [isDogFound, setIsDogFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dogs, setDogs] = useState("");
  const [names, setNames] = useState("");
  const location = useLocation();
  const [random, setRandom] = useState(location.state);

  const fetchDogs = async (amount, breedId) => {
    try {
      let response = await fetch(
        `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=RANDOM&limit=${amount}&breed_ids=${breedId}`,
        { method: "GET", mode: "cors" }
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
    fetchDogs(1, "");
  }, []);

  const handleClick = (amount, breed) => {
    setIsLoading(true);

    fetchDogs(amount, breed);
  };

  return (
    <section className="searchPage">
      {random && (
        <SingleDog
          url={dogs[0].url}
          bredFor={dogs[0].breeds[0].bred_for}
          temperament={dogs[0].breeds[0].temperament}
          breed={dogs[0].breeds[0].name}
        />
      )}
      {!random && <DogSearch />}

      <div className="searchPage-btn-area">
        <button
          onClick={() => {
            setRandom(true);
            handleClick(1, "");
          }}
          className="searchPage-btn"
        >
          Random Pup
        </button>

        <button
          onClick={() => {
            setRandom(false);
          }}
          className="searchPage-btn"
        >
          Available dogs
        </button>
      </div>
    </section>
  );
}

export default SearchPage;
