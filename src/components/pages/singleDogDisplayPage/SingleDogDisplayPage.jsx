import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleDog from "../../subcomponents/singleDog/SingleDog";
import data from "../../../data/data.json";

function SingleDogDisplay({ dogList }) {
  const { dogId } = useParams();
  const [dog, setDog] = useState(null);

  // sends user to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // load data based on url param
  useEffect(() => {
    setDog(data[dogId]);
  }, []);

  return (
    <div>
      {/* display if dog not found */}
      {!dog && <p>Dog not found :(</p>}

      {dog && (
        <SingleDog
          key={dog.id}
          id={dog.id}
          name={dog.dog.name}
          sex={dog.dog.sex}
          breed={dog.dog.breed}
          age={dog.dog.age}
          temperament={dog.dog.temperament}
          img={dog.dog.img}
          vaccinations={dog.vaccinated}
        />
      )}
    </div>
  );
}

export default SingleDogDisplay;
