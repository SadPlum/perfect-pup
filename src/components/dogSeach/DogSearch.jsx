import React, { useEffect, useState } from "react";
import SingleDog from "../singleDog/SingleDog";

function DogSearch({ dogList }) {
  const [dogs, setDogs] = useState("");
  const [isDogFound, setIsDogFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <section className="dogSearch">
        {/* <h2 className="dogSearch-title"> List of available dogs</h2> */}
        {isLoading && <div>Searching for dogs</div>}
        {dogList &&
          dogList.map((dog, i) => (
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
