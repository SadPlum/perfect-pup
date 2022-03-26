import React, { useState, useEffect } from "react";
import SingleDog from "../singleDog/SingleDog";

function RandomPage() {
  const [isDogFound, setIsDogFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dog, setDog] = useState("");
  const [name, setName] = useState("");

  async function fetchDogs() {
    try {
      let response = await fetch(
        `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=RANDOM&limit=1`,
        { method: "GET", mode: "cors" }
      )
        .then((response) => response.json())
        .then((response) => {
          setDog(response);
          setIsDogFound(true);
          setIsLoading(false);
        });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchDogs;
  }, [isLoading]);

  return (
    <section>
      {!isLoading && (
        <div>
          <SingleDog
            url={dog[0].url}
            bredFor={dog[0].breeds[0].bred_for}
            temperament={dog[0].breeds[0].temperament}
            breed={dog[0].breeds[0].name}
          />
        </div>
      )}
      {isLoading && <div>Looking for pup</div>}
    </section>
  );
}

export default RandomPage;
