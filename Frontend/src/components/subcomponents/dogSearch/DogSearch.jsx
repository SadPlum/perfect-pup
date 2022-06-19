import React, { useEffect, useState } from "react";

import DogDisplay from "../dogDisplay/DogDisplay";
import Filter from "../Filter/Filter";

function DogSearch({ dogList }) {
  const [sexValue, setSexValue] = useState("");
  const [vaccinatedValue, setVaccinatedValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  // set default dog list to API call from Search Page
  const [dogArr, setDogArr] = useState(dogList);

  // SETS FILTER TO SEARCH DOG BY SEX
  const handleChangeSex = (value) => {
    setSexValue(value);
  };
  // SETS FILTER TO SEARCH DOG BY VACCINATION STATUS
  const handleChangeVaccinated = (value) => {
    setVaccinatedValue(value);
  };
  // SETS FILTER TO SEARCH DOG BY SIZE
  const handleChangeSize = (value) => {
    setSizeValue(value);
  };

  // Filters
  useEffect(() => {
    let tempDogList = dogList;
    if (sexValue !== "") {
      tempDogList = tempDogList.filter(
        (dog) => dog.sex.toString() === sexValue
      );
    }
    if (vaccinatedValue !== "") {
      tempDogList = tempDogList.filter(
        (dog) => dog.vaccinated.toString() === vaccinatedValue
      );
    }
    if (sizeValue !== "") {
      tempDogList = tempDogList.filter(
        (dog) => dog.size.toString() === sizeValue
      );
    }
    setDogArr(tempDogList);
  }, [sexValue, vaccinatedValue, sizeValue]);

  return (
    <>
      <section className="dogSearch">
        <div className="dogSearch-head">
          <h2 className="dogSearch-title"> List of available dogs</h2>
          <section className="searchBars">
            <Filter
              value={sexValue}
              title="Sex"
              handleChange={handleChangeSex}
              valueOptionArray={[
                ["", "Both"],
                ["male", "Male"],
                ["female", "Female"],
              ]}
            />
            <Filter
              value={vaccinatedValue}
              title="Vaccinated"
              handleChange={handleChangeVaccinated}
              valueOptionArray={[
                ["", "Either"],
                ["true", "Yes"],
                ["false", "No"],
              ]}
            />
            <Filter
              value={sizeValue}
              title="Size"
              handleChange={handleChangeSize}
              valueOptionArray={[
                ["", "Any"],
                ["small", "Small"],
                ["medium", "Medium"],
                ["large", "Large"],
              ]}
              last={true}
            />
          </section>
        </div>
        {/* 

        {/* IF DOG IS NOT ADOPTED, RETURN PROFILES */}
        {dogArr &&
          dogArr.map((dog) => {
            if (dog.adopted === false) {
              return (
                <DogDisplay
                  key={dog._id}
                  id={dog.id}
                  name={dog.name}
                  breed={dog.breed}
                  sex={dog.sex}
                  image={dog.image}
                  age={dog.age}
                />
              );
            }
          })}
      </section>
    </>
  );
}

export default DogSearch;
