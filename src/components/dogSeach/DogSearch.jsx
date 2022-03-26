import React, { useEffect, useState } from "react";
import SingleDog from "../singleDog/SingleDog";

function DogSearch() {
  const [dogs, setDogs] = useState("");
  const [isDogFound, setIsDogFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    fetchDogs(10, "");
  }, []);

  return (
    <>
      <section className="dogSearch">
        <h2 className="dogSearch-title"> List of available dogs</h2>
        {isLoading && <div>Searching for dogs</div>}
        {dogs &&
          dogs.map((dog, i) => (
            <SingleDog
              key={i}
              url={dog.url}
              temperament={dog.breeds[0].temperament}
              breed={dog.breeds[0].name}
            />
          ))}
      </section>
    </>
  );
}

export default DogSearch;
