import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleDog from "../../subcomponents/singleDog/SingleDog";
import { getDog } from "../../../functions/apiRequests";

function SingleDogDisplay({ dogList }) {
  const { dogId } = useParams();
  const [dog, setDog] = useState(null);
  const [dogImage, setDogImage] = useState(null);
  // sends user to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getDog(dogId).then((data) => {
      setDog(data);
    });
  }, []);

  useEffect(() => {
    if (dog) {
      const imageIndex = dog.image.indexOf("/dogImages");
      const imageUrl = "http://perfectpup.xyz/" + dog.image.slice(imageIndex);
      setDogImage(imageUrl);
    }
  }, [dog]);

  return (
    <div>
      {/* display if dog not found */}
      {!dog && <p>Dog not found :(</p>}

      {dog && (
        <SingleDog
          key={dog._id}
          id={dog.id}
          name={dog.name}
          sex={dog.sex}
          breed={dog.breed}
          age={dog.age}
          description={dog.description}
          temperament={dog.temperament}
          image={dogImage}
          vaccinations={dog.vaccinated}
        />
      )}
    </div>
  );
}

export default SingleDogDisplay;
