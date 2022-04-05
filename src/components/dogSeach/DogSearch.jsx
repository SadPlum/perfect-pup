import React, { useEffect, useState } from "react";
import SingleDog from "../singleDog/SingleDog";
import DogDisplay from "../dogDisplay/DogDisplay";

function DogSearch({ dogList }) {
  const [sexValue, setSexValue] = useState("");
  const [dogArr, setDogArr] = useState(dogList);

  // SETS FILTER TO SEARCH DOG BY SEX
  const handleChange = (value) => {
    setSexValue(value);
    value !== ""
      ? setDogArr(dogList.filter((dog) => dog.dog.sex === value))
      : setDogArr(dogList);
  };

  return (
    <>
      <section className="dogSearch">
        <div className="dogSearch-head">
          <h2 className="dogSearch-title"> List of available dogs</h2>
          {/* <label for="dogBreeds">Breeds:</label>
        <select name="dogBreeds" id="dogBreeds">
          <option>Will have breeds</option>
        </select> */}
          <label>Sex:</label>
          <select
            value={sexValue}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="">Both</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        {/* 
        {dogList &&
          dogList.map((dog, i) => (
            <SingleDog
              key={i}
              url={dog.url}
              temperament={dog.breeds[0].temperament}
              breed={dog.breeds[0].name}
            />
          ))} */}

        {/* IF DOG IS NOT ADOPTED, RETURN PROFILES */}
        {dogArr.map((dog, i) => {
          if (dog.adopted === false) {
            return (
              <DogDisplay
                key={i}
                id={dog.i}
                name={dog.dog.name}
                breed={dog.dog.breed}
                sex={dog.dog.sex}
                img={dog.dog.img}
                age={dog.dog.age}
                temperament={dog.dog.temperament}
              />
            );
          }
        })}
      </section>
    </>
  );
}

export default DogSearch;
